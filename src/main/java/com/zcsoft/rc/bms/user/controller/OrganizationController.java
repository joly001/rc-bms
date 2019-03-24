package com.zcsoft.rc.bms.user.controller;


import com.zcsoft.rc.bms.user.service.OrganizationService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;


@Controller
@RequestMapping(value="organization")
public class OrganizationController {
	
	private OrganizationService organizationService;

	public OrganizationService getOrganizationService() {
		return organizationService;
	}
	@Resource
	public void setOrganizationService(OrganizationService organizationService) {
		this.organizationService = organizationService;
	}
	
}
