package com.zcsoft.rc.bms.mileage.controller;


import com.zcsoft.rc.bms.api.mileage.entity.MileageAddReq;
import com.zcsoft.rc.bms.api.mileage.entity.MileageAddRsp;
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
	
}
