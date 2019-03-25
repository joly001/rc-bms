package com.zcsoft.rc.bms.user.controller;


import com.zcsoft.rc.bms.api.user.entity.AuthoritiesAllRsp;
import com.zcsoft.rc.bms.api.user.entity.RoleAddReq;
import com.zcsoft.rc.bms.api.user.entity.RoleAddRsp;
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
	 * 查询所有权限组
	 */
	@RequestMapping(value="authorities", method= RequestMethod.POST)
	public AuthoritiesAllRsp authorities() {
		return roleService.authorities();
	}

	/**
	 * 角色添加
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public RoleAddRsp add(@Valid RoleAddReq req) {
		return roleService.add(req);
	}
	
}
