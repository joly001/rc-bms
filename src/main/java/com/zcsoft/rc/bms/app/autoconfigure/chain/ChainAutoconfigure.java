package com.zcsoft.rc.bms.app.autoconfigure.chain;


import com.sharingif.cube.core.chain.ChainImpl;
import com.sharingif.cube.core.chain.command.Command;
import com.sharingif.cube.core.handler.chain.*;
import com.sharingif.cube.security.handler.chain.command.authentication.RoleAuthenticationCommand;
import com.sharingif.cube.security.handler.chain.command.authentication.SecurityAuthenticationCommand;
import com.sharingif.cube.security.web.handler.chain.command.authentication.SessionConcurrentWebCommand;
import com.sharingif.cube.security.web.handler.chain.command.user.CoreUserHttpSessionManageWebCommand;
import com.sharingif.cube.security.web.handler.chain.command.user.InvalidateHttpSessionWebCommand;
import com.sharingif.cube.security.web.handler.chain.session.SessionExpireChain;
import com.sharingif.cube.security.web.spring.handler.chain.command.session.SessionRegistryCommand;
import com.zcsoft.rc.bms.app.chain.UserAuthorityAccessDecisionChain;
import com.zcsoft.rc.bms.app.chain.command.UserConvertToUserLoginReqCommand;
import com.zcsoft.rc.bms.app.chain.command.UserLoginReqConvertToUserCommand;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class ChainAutoconfigure {

    @Bean("loginChain")
    public ChainImpl<HandlerMethodContent> createLoginPassChain(
            UserLoginReqConvertToUserCommand userLoginReqConvertToUserCommand
            , SecurityAuthenticationCommand passwordSecurityAuthenticationCommand
            , RoleAuthenticationCommand roleAuthenticationCommand
            , SessionConcurrentWebCommand sessionConcurrentWebCommand
            , InvalidateHttpSessionWebCommand invalidateHttpSessionWebCommand
            , CoreUserHttpSessionManageWebCommand coreUserHttpSessionManageWebCommand
            , SessionRegistryCommand sessionRegistryCommand
            , UserConvertToUserLoginReqCommand userConvertToUserLoginReqCommand
    ) {
        List<Command<? super HandlerMethodContent>> commands = new ArrayList<Command<? super HandlerMethodContent>>();
        commands.add(userLoginReqConvertToUserCommand);
        commands.add(passwordSecurityAuthenticationCommand);
        commands.add(roleAuthenticationCommand);
        commands.add(sessionConcurrentWebCommand);
        commands.add(invalidateHttpSessionWebCommand);
        commands.add(coreUserHttpSessionManageWebCommand);
        commands.add(sessionRegistryCommand);
        commands.add(userConvertToUserLoginReqCommand);

        ChainImpl loginChain = new ChainImpl();
        loginChain.setCommands(commands);

        return loginChain;
    }

    @Bean("noUserChain")
    public UserAuthorityAccessDecisionChain createNoUserChain() {

        List<String> excludeMethods = new ArrayList<String>();
        excludeMethods.add("user.controller.UserController.login");

        List<String> commomAuthority = new ArrayList<>();
        commomAuthority.add("user.controller.UserController.signOut");
        commomAuthority.add("user.controller.UserController.userAuthorities");
        commomAuthority.add("warning.controller.WorkWarningController.userWarningList");
        commomAuthority.add("warning.controller.WorkWarningController.warningList");
        commomAuthority.add("warning.controller.WorkWarningController.list");
        commomAuthority.add("warning.controller.TrainWarningController.list");
        commomAuthority.add("railway.controller.SafetyZoneController.add");
        commomAuthority.add("railway.controller.SafetyZoneController.delete");
        commomAuthority.add("railway.controller.SafetyZoneController.deleteAll");
        commomAuthority.add("railway.controller.SafetyZoneController.list");

        UserAuthorityAccessDecisionChain noUserChain = new UserAuthorityAccessDecisionChain();
        noUserChain.setExcludeMethods(excludeMethods);
        noUserChain.setCommomAuthority(commomAuthority);
        noUserChain.setReplaceContent("com.zcsoft.rc.bms.");

        return noUserChain;
    }

    @Bean(name="springMCVChains")
    public MultiHandlerMethodChain createSpringMCVChains(
            MonitorPerformanceChain controllerMonitorPerformanceChain
            , SessionExpireChain sessionExpireChain
            , UserAuthorityAccessDecisionChain userAuthorityAccessDecisionChain
            , AnnotationHandlerMethodChain annotationHandlerMethodChain
    ) {

        List<HandlerMethodChain> chains = new ArrayList<HandlerMethodChain>(3);
        chains.add(controllerMonitorPerformanceChain);
        chains.add(sessionExpireChain);
        chains.add(userAuthorityAccessDecisionChain);
        chains.add(annotationHandlerMethodChain);

        MultiHandlerMethodChain springMVCHandlerMethodContent = new MultiHandlerMethodChain();
        springMVCHandlerMethodContent.setChains(chains);

        return  springMVCHandlerMethodContent;
    }

}
