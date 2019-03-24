package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.UserRole;

import java.util.List;


public interface UserRoleService extends IBaseService<UserRole, java.lang.String> {

    /**
     * 根据用户id获得角色
     * @param userId
     * @return
     */
    List<UserRole> getByUserId(String userId);

    /**
     * 根据用户id获得权限列表
     * @param userId
     * @return
     */
    List<Authority> getAuthorityByUserId(String userId);
	
}
