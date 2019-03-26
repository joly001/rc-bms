package com.zcsoft.rc.bms.user.controller;


import com.zcsoft.rc.bms.api.user.entity.*;
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
	 * 组织添加
	 * @param req
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public OrganizationAddRsp add(@Valid OrganizationAddReq req){
		return organizationService.add(req);
	}

	/**
	 * 组织删除
	 * @param req
	 */
	@RequestMapping(value="delete", method= RequestMethod.POST)
	public OrganizationDeleteRsp delete(@Valid OrganizationDeleteReq req){
		return organizationService.delete(req);
	}

	/**
	 * 组织修改
	 * @param req
	 */
	@RequestMapping(value="update", method= RequestMethod.POST)
	public OrganizationUpdateRsp update(@Valid OrganizationUpdateReq req){
		return organizationService.update(req);
	}

	/**
	 * 组织查询所有
	 * @return
	 */
	@RequestMapping(value="all", method= RequestMethod.POST)
	public OrganizationAllRsp all() {
		return organizationService.all();
	}
	
}
