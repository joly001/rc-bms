package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.user.service.AuthorityGroupService;
import com.zcsoft.rc.bms.user.service.AuthorityService;
import com.zcsoft.rc.user.dao.AuthorityGroupDAO;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.AuthorityGroup;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class AuthorityGroupServiceImpl extends BaseServiceImpl<AuthorityGroup, java.lang.String> implements AuthorityGroupService {
	
	private AuthorityGroupDAO authorityGroupDAO;

	private AuthorityService authorityService;

	@Resource
	public void setAuthorityGroupDAO(AuthorityGroupDAO authorityGroupDAO) {
		super.setBaseDAO(authorityGroupDAO);
		this.authorityGroupDAO = authorityGroupDAO;
	}
	@Resource
	public void setAuthorityService(AuthorityService authorityService) {
		this.authorityService = authorityService;
	}

	@Override
	public List<Authority> getAuthorityByAuthorityGroup(String authorityGroupId) {
		return authorityService.getByAuthorityGroupId(authorityGroupId);
	}
}
