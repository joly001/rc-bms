package com.zcsoft.rc.bms.user.controller;


import com.zcsoft.rc.bms.api.user.entity.OrganizationAddReq;
import com.zcsoft.rc.bms.api.user.entity.OrganizationAddRsp;
import com.zcsoft.rc.bms.user.service.OrganizationService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.validation.Valid;


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

	/**
	 * 添加组织
	 * @param req
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public OrganizationAddRsp add(@Valid OrganizationAddReq req){
		return organizationService.add(req);
	}
	
}
