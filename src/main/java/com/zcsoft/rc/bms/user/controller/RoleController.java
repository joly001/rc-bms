package com.zcsoft.rc.bms.user.controller;


import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.user.entity.*;
import com.zcsoft.rc.bms.user.service.RoleService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.validation.Valid;


@Controller
@RequestMapping(value="role")
public class RoleController {
	
	private RoleService roleService;

	public RoleService getRoleService() {
		return roleService;
	}
	@Resource
	public void setRoleService(RoleService roleService) {
		this.roleService = roleService;
	}

	/**
	 * 权限组查询所有
	 */
	@RequestMapping(value="authorities", method= RequestMethod.POST)
	public AuthoritiesAllRsp authorities() {
		return roleService.authorities();
	}

	/**
	 * 添加
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public RoleAddRsp add(@Valid RoleAddReq req) {
		return roleService.add(req);
	}

	/**
	 * 角色删除
	 */
	@RequestMapping(value="delete", method= RequestMethod.POST)
	public RoleDeleteRsp delete(@Valid RoleDeleteReq req) {
		return roleService.delete(req);
	}

	/**
	 * 角色修改
	 */
	@RequestMapping(value="update", method= RequestMethod.POST)
	public RoleUpdateRsp update(@Valid RoleUpdateReq req) {
		return roleService.update(req);
	}

	/**
	 * 角色分页查询
	 */
	@RequestMapping(value="list", method= RequestMethod.POST)
	public HttpPaginationRepertory<RoleListRsp> list(@Valid HttpPaginationCondition<RoleListReq> req) {
		return roleService.list(req);
	}
	
}
