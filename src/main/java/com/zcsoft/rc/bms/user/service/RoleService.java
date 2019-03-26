package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.user.entity.*;
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

    /**
     * 查询所有权限组
     * @return
     */
    AuthoritiesAllRsp authorities();

    /**
     * 角色添加
     * @param req
     * @return
     */
    RoleAddRsp add(RoleAddReq req);

    /**
     * 角色删除
     * @param req
     * @return
     */
    RoleDeleteRsp delete(RoleDeleteReq req);

    /**
     * 角色修改
     * @param req
     * @return
     */
    RoleUpdateRsp update(RoleUpdateReq req);

    /**
     * 角色分页查询
     * @param req
     * @return
     */
    HttpPaginationRepertory<RoleListRsp> list(HttpPaginationCondition<RoleListReq> req);
	
}
