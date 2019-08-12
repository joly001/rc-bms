package com.zcsoft.rc.bms.warning.controller;


import com.sharingif.cube.core.handler.bind.annotation.DataContainer;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.warning.entity.*;
import com.zcsoft.rc.bms.warning.service.WorkWarningService;
import com.zcsoft.rc.user.model.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.validation.Valid;


@Controller
@RequestMapping(value="workWarning")
public class WorkWarningController {
	
	private WorkWarningService workWarningService;

	@Resource
	public void setWorkWarningService(WorkWarningService workWarningService) {
		this.workWarningService = workWarningService;
	}

	/**
	 *	用户警告记录
	 */
	@RequestMapping(value="userWarningList", method= RequestMethod.POST)
	public UserWarningListRsp userWarningList(UserWarningListReq req) {
		return workWarningService.userWarningList(req);
	}

	/**
	 * 警告记录,报警状态
	 */
	@RequestMapping(value="warningList", method= RequestMethod.POST)
	public WorkWarningWarningListRsp warningList() {
		return workWarningService.warningList();
	}

	/**
	 * 警告分页查询
	 */
	@RequestMapping(value="list", method= RequestMethod.POST)
	public HttpPaginationRepertory<WorkWarningListRsp> list(@Valid HttpPaginationCondition<WorkWarningListReq> req, @DataContainer User user) {
		return workWarningService.list(req, user.getOrganizationId());
	}
	
}
