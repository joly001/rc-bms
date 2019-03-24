package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.user.service.OrganizationService;
import com.zcsoft.rc.user.dao.OrganizationDAO;
import com.zcsoft.rc.user.model.entity.Organization;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class OrganizationServiceImpl extends BaseServiceImpl<Organization, java.lang.String> implements OrganizationService {
	
	private OrganizationDAO organizationDAO;

	@Resource
	public void setOrganizationDAO(OrganizationDAO organizationDAO) {
		super.setBaseDAO(organizationDAO);
		this.organizationDAO = organizationDAO;
	}
	
	
}
