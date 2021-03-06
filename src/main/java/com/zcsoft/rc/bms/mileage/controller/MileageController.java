package com.zcsoft.rc.bms.mileage.controller;


import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.mileage.entity.*;
import com.zcsoft.rc.bms.mileage.service.MileageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.validation.Valid;


@Controller
@RequestMapping(value="mileage")
public class MileageController {
	
	private MileageService mileageService;

	public MileageService getMileageService() {
		return mileageService;
	}
	@Resource
	public void setMileageService(MileageService mileageService) {
		this.mileageService = mileageService;
	}

	/**
	 * 里程添加
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public MileageAddRsp add(@Valid MileageAddReq req) {
		return mileageService.add(req);
	}

	/**
	 * 里程删除
	 * @param req
	 * @return
	 */
	@RequestMapping(value="delete", method= RequestMethod.POST)
	public MileageDeleteRsp delete(@Valid MileageDeleteReq req) {
		return mileageService.delete(req);
	}

	/**
	 * 里程修改
	 */
	@RequestMapping(value="update", method= RequestMethod.POST)
	public MileageUpdateRsp update(@Valid MileageUpdateReq req) {
		return mileageService.update(req);
	}

	/**
	 * 里程分页查询
	 */
	@RequestMapping(value="list", method= RequestMethod.POST)
	public HttpPaginationRepertory<MileageListRsp> list(@Valid HttpPaginationCondition<MileageListReq> req) {
		return mileageService.list(req);
	}
	
}
