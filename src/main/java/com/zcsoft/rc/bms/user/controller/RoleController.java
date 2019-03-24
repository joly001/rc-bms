package com.zcsoft.rc.bms.user.controller;


import com.zcsoft.rc.bms.user.service.RoleService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;


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
	
}
