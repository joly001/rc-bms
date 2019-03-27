package com.zcsoft.rc.bms.mileage.controller;


import com.zcsoft.rc.bms.mileage.service.MileageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;


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
	
}
