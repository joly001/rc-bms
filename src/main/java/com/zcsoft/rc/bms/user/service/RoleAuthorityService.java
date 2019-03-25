package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.RoleAuthority;

import java.util.List;


public interface RoleAuthorityService extends IBaseService<RoleAuthority, java.lang.String> {

    /**
     * 获得权限组服务
     * @return
     */
    AuthorityGroupService getAuthorityGroupService();

    /**
     * 根据角色id查询角色权限
     * @param roleId
     * @return
     */
    List<RoleAuthority> getByRoleId(String roleId);

    /**
     * 根据角色id查询权限
     * @param roleId
     * @return
     */
    List<Authority> getAuthorityByRoleId(String roleId);
	
}
