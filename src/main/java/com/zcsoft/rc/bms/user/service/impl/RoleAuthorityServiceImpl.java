package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.user.service.AuthorityGroupService;
import com.zcsoft.rc.bms.user.service.RoleAuthorityService;
import com.zcsoft.rc.user.dao.RoleAuthorityDAO;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.RoleAuthority;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class RoleAuthorityServiceImpl extends BaseServiceImpl<RoleAuthority, java.lang.String> implements RoleAuthorityService {
	
	private RoleAuthorityDAO roleAuthorityDAO;

	private AuthorityGroupService authorityGroupService;

	@Resource
	public void setRoleAuthorityDAO(RoleAuthorityDAO roleAuthorityDAO) {
		super.setBaseDAO(roleAuthorityDAO);
		this.roleAuthorityDAO = roleAuthorityDAO;
	}

	public AuthorityGroupService getAuthorityGroupService() {
		return authorityGroupService;
	}

	@Resource
	public void setAuthorityGroupService(AuthorityGroupService authorityGroupService) {
		this.authorityGroupService = authorityGroupService;
	}

	@Override
	public List<RoleAuthority> getByRoleId(String roleId) {
		RoleAuthority roleAuthority = new RoleAuthority();
		roleAuthority.setRoleCode(roleId);

		return roleAuthorityDAO.queryList(roleAuthority);
	}

	@Override
	public List<Authority> getAuthorityByRoleId(String roleId) {
		List<Authority> authorityList = new ArrayList<>(100);

		List<RoleAuthority> roleAuthorityList = getByRoleId(roleId);
		roleAuthorityList.forEach(roleAuthority -> {
			authorityList.addAll(authorityGroupService.getAuthorityByAuthorityGroup(roleAuthority.getAuthorityCode()));
		});

		return authorityList;
	}
}
