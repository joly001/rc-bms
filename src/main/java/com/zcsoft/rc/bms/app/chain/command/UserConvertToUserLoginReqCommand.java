package com.zcsoft.rc.bms.app.chain.command;

import com.sharingif.cube.core.exception.CubeException;
import com.sharingif.cube.core.handler.chain.HandlerMethodContent;
import com.sharingif.cube.core.handler.chain.command.AbstractHandlerMethodCommand;
import com.zcsoft.rc.bms.api.user.entity.UserLoginReq;
import com.zcsoft.rc.user.model.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserConvertToUserLoginReqCommand extends AbstractHandlerMethodCommand {

    @Override
    public void execute(HandlerMethodContent content) throws CubeException {
        User user = content.getObject(User.class);

        UserLoginReq userLoginReq = new UserLoginReq();
        userLoginReq.setUsername(user.getUsername());
        userLoginReq.setPassword(user.getPassword());

        Object[] args = {userLoginReq};

        content.setArgs(args);
    }
}
