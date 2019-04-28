package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.UserRole;

import java.util.List;


public interface UserRoleService extends IBaseService<UserRole, java.lang.String> {

    /**
     * 获取角色服务
     * @return
     */
    RoleService getRoleService();

    /**
     * 根据用户id获得角色
     * @param userId
     * @return
     */
    List<UserRole> getByUserId(String userId);

    /**
     * 根据角色id获得角色
     * @param roleid
     * @return
     */
    List<UserRole> getByRoleId(String roleid);

    /**
     * 根据用户id获得权限列表
     * @param userId
     * @return
     */
    List<Authority> getAuthorityByUserId(String userId);

    /**
     * 根据用户角色查询
     * @param userId
     * @param roleCode
     * @return
     */
    UserRole getUserRole(String userId, String roleCode);

    /**
     * 删除用户角色
     * @param userId
     */
    void deleteByUserId(String userId);
}
