package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.user.service.RoleAuthorityService;
import com.zcsoft.rc.bms.user.service.RoleService;
import com.zcsoft.rc.user.dao.RoleDAO;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.Role;
import com.zcsoft.rc.user.model.entity.RoleAuthority;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RoleServiceImpl extends BaseServiceImpl<Role, java.lang.String> implements RoleService {
	
	private RoleDAO roleDAO;

	private RoleAuthorityService roleAuthorityService;

	@Resource
	public void setRoleDAO(RoleDAO roleDAO) {
		super.setBaseDAO(roleDAO);
		this.roleDAO = roleDAO;
	}
	@Resource
	public void setRoleAuthorityService(RoleAuthorityService roleAuthorityService) {
		this.roleAuthorityService = roleAuthorityService;
	}

	@Override
	public List<Authority> getAuthorityByRoleId(String roleId) {
		return roleAuthorityService.getAuthorityByRoleId(roleId);
	}
}
