package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.Role;

import java.util.List;


public interface RoleService extends IBaseService<Role, java.lang.String> {

    /**
     * 根据角色id获取权限
     * @param roleId
     * @return
     */
    List<Authority> getAuthorityByRoleId(String roleId);
	
}
