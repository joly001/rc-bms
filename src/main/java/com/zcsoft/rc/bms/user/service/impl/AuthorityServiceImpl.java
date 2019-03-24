package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.user.service.AuthorityService;
import com.zcsoft.rc.user.dao.AuthorityDAO;
import com.zcsoft.rc.user.model.entity.Authority;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class AuthorityServiceImpl extends BaseServiceImpl<Authority, java.lang.String> implements AuthorityService {
	
	private AuthorityDAO authorityDAO;

	@Resource
	public void setAuthorityDAO(AuthorityDAO authorityDAO) {
		super.setBaseDAO(authorityDAO);
		this.authorityDAO = authorityDAO;
	}


	@Override
	public List<Authority> getByAuthorityGroupId(String authorityGroupId) {
		Authority authority = new Authority();
		authority.setAuthorityGroupId(authorityGroupId);

		return authorityDAO.queryList(authority);
	}
}
