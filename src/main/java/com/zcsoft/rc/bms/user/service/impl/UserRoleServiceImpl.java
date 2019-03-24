package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.user.service.RoleService;
import com.zcsoft.rc.bms.user.service.UserRoleService;
import com.zcsoft.rc.user.dao.UserRoleDAO;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.UserRole;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserRoleServiceImpl extends BaseServiceImpl<UserRole, java.lang.String> implements UserRoleService {
	
	private UserRoleDAO userRoleDAO;

	private RoleService roleService;

	@Resource
	public void setUserRoleDAO(UserRoleDAO userRoleDAO) {
		super.setBaseDAO(userRoleDAO);
		this.userRoleDAO = userRoleDAO;
	}
	@Resource
	public void setRoleService(RoleService roleService) {
		this.roleService = roleService;
	}

	@Override
	public List<UserRole> getByUserId(String userId) {
		UserRole userRole = new UserRole();
		userRole.setUserId(userId);
		return userRoleDAO.queryList(userRole);
	}

	@Override
	public List<Authority> getAuthorityByUserId(String userId) {
		List<Authority> authorityList = new ArrayList<>(200);

		List<UserRole> userRoleList = getByUserId(userId);

		userRoleList.forEach(userRole ->{
			authorityList.addAll(roleService.getAuthorityByRoleId(userRole.getRoleCode()));
		});

		return authorityList;
	}
}
