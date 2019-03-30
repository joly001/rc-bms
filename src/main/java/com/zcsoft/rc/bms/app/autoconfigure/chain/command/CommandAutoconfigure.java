package com.zcsoft.rc.bms.app.autoconfigure.chain.command;

import com.sharingif.cube.security.authentication.AuthenticationHander;
import com.sharingif.cube.security.authentication.role.IRoleAuthenticationHandler;
import com.sharingif.cube.security.handler.chain.command.authentication.RoleAuthenticationCommand;
import com.sharingif.cube.security.handler.chain.command.authentication.SecurityAuthenticationCommand;
import com.zcsoft.rc.bms.app.components.security.authentication.PasswordAuthenticationHandler;
import com.zcsoft.rc.bms.app.components.security.authentication.RoleAuthenticationHandler;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class CommandAutoconfigure {

    @Bean(name="passwordSecurityAuthenticationCommand")
    public SecurityAuthenticationCommand createPasswordSecurityAuthenticationCommand(PasswordAuthenticationHandler passwordAuthenticationHandler) {
        List<AuthenticationHander> authenticationHanders = new ArrayList<>();
        authenticationHanders.add(passwordAuthenticationHandler);

        SecurityAuthenticationCommand securityAuthenticationCommand = new SecurityAuthenticationCommand();
        securityAuthenticationCommand.setAuthenticationHanders(authenticationHanders);

        return securityAuthenticationCommand;
    }

    @Bean(name="roleAuthenticationCommand")
    public RoleAuthenticationCommand createRoleAuthenticationCommand(RoleAuthenticationHandler roleAuthenticationHandler) {
        List<IRoleAuthenticationHandler> roleAuthenticationHandlers = new ArrayList<>();
        roleAuthenticationHandlers.add(roleAuthenticationHandler);

        RoleAuthenticationCommand roleAuthenticationCommand = new RoleAuthenticationCommand();
        roleAuthenticationCommand.setRoleAuthenticationHandlers(roleAuthenticationHandlers);

        return roleAuthenticationCommand;
    }

}
