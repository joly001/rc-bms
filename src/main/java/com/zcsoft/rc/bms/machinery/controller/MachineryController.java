package com.zcsoft.rc.bms.machinery.controller;


import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.machinery.entity.*;
import com.zcsoft.rc.bms.machinery.service.MachineryService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.validation.Valid;


@Controller
@RequestMapping(value="machinery")
public class MachineryController {
	
	private MachineryService machineryService;

	@Resource
	public void setMachineryService(MachineryService machineryService) {
		this.machineryService = machineryService;
	}

	/**
	 * 机械添加
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public MachineryAddRsp add(@Valid MachineryAddReq req) {
		return machineryService.add(req);
	}

	/**
	 * 机械删除
	 */
	@RequestMapping(value="delete", method= RequestMethod.POST)
	public MachineryDeleteRsp delete(@Valid MachineryDeleteReq req) {
		return machineryService.delete(req);
	}

	/**
	 * 机械修改
	 */
	@RequestMapping(value="update", method= RequestMethod.POST)
	public MachineryUpdateRsp update(@Valid MachineryUpdateReq req) {
		return machineryService.update(req);
	}

	/**
	 * 机械分页查询
	 */
	@RequestMapping(value="list", method= RequestMethod.POST)
	public HttpPaginationRepertory<MachineryListRsp> list(@Valid HttpPaginationCondition<MachineryListReq> req) {
		return machineryService.list(req);
	}

}
