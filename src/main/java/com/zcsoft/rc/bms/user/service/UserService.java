package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.User;

import java.util.List;


public interface UserService extends IBaseService<User, java.lang.String> {

    /**
     * 根据用户名查询用户
     * @param username
     * @return
     */
    User getByUsername(String username);

    /**
     * 根据用户id查询权限
     * @param userId
     * @return
     */
    List<Authority> getAuthoritiesByUserId(String userId);


	
}
