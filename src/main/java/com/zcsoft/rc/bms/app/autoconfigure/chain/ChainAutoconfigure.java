package com.zcsoft.rc.bms.app.autoconfigure.chain;


import com.sharingif.cube.core.chain.ChainImpl;
import com.sharingif.cube.core.chain.command.Command;
import com.sharingif.cube.core.handler.chain.*;
import com.sharingif.cube.security.handler.chain.command.authentication.RoleAuthenticationCommand;
import com.sharingif.cube.security.handler.chain.command.authentication.SecurityAuthenticationCommand;
import com.sharingif.cube.security.handler.chain.command.password.PasswordEncryptorCommand;
import com.sharingif.cube.security.handler.chain.command.user.RemoveUserPasswordCommand;
import com.sharingif.cube.security.web.handler.chain.command.authentication.SessionConcurrentWebCommand;
import com.sharingif.cube.security.web.handler.chain.command.user.CoreUserHttpSessionManageWebCommand;
import com.sharingif.cube.security.web.handler.chain.command.user.InvalidateHttpSessionWebCommand;
import com.sharingif.cube.security.web.handler.chain.session.SessionExpireChain;
import com.sharingif.cube.security.web.spring.handler.chain.command.session.SessionRegistryCommand;
import com.zcsoft.rc.bms.app.chain.NoUserChain;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class ChainAutoconfigure {

    @Bean("loginChain")
    public ChainImpl<HandlerMethodContent> createLoginPassChain(
            SecurityAuthenticationCommand securityAuthenticationCommand
            , RoleAuthenticationCommand roleAuthenticationCommand
            , RemoveUserPasswordCommand removeUserPasswordCommand
            , SessionConcurrentWebCommand sessionConcurrentWebCommand
            , InvalidateHttpSessionWebCommand invalidateHttpSessionWebCommand
            , CoreUserHttpSessionManageWebCommand coreUserHttpSessionManageWebCommand
            , SessionRegistryCommand sessionRegistryCommand
    ) {
        List<Command<? super HandlerMethodContent>> commands = new ArrayList<Command<? super HandlerMethodContent>>();
        commands.add(securityAuthenticationCommand);
        commands.add(roleAuthenticationCommand);
        commands.add(removeUserPasswordCommand);
        commands.add(sessionConcurrentWebCommand);
        commands.add(invalidateHttpSessionWebCommand);
        commands.add(coreUserHttpSessionManageWebCommand);
        commands.add(sessionRegistryCommand);

        ChainImpl loginChain = new ChainImpl();
        loginChain.setCommands(commands);

        return loginChain;
    }

    @Bean("noUserChain")
    public NoUserChain createNoUserChain() {

        List<String> excludeMethods = new ArrayList<String>();

        excludeMethods.add("com.zcsoft.rc.bms.user.controller.UserController.login");

        NoUserChain noUserChain = new NoUserChain();
        noUserChain.setExcludeMethods(excludeMethods);

        return noUserChain;
    }

    @Bean(name="springMCVChains")
    public MultiHandlerMethodChain createSpringMCVChains(
            MonitorPerformanceChain controllerMonitorPerformanceChain
            ,SessionExpireChain sessionExpireChain
            ,NoUserChain noUserChain
            ,AnnotationHandlerMethodChain annotationHandlerMethodChain
    ) {

        List<HandlerMethodChain> chains = new ArrayList<HandlerMethodChain>(3);
        chains.add(controllerMonitorPerformanceChain);
        chains.add(sessionExpireChain);
        chains.add(noUserChain);
        chains.add(annotationHandlerMethodChain);

        MultiHandlerMethodChain springMVCHandlerMethodContent = new MultiHandlerMethodChain();
        springMVCHandlerMethodContent.setChains(chains);

        return  springMVCHandlerMethodContent;
    }

}
