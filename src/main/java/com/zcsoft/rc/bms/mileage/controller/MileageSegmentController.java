package com.zcsoft.rc.bms.mileage.controller;


import com.zcsoft.rc.bms.mileage.service.MileageSegmentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;


@Controller
@RequestMapping(value="mileageSegment")
public class MileageSegmentController {
	
	private MileageSegmentService mileageSegmentService;

	public MileageSegmentService getMileageSegmentService() {
		return mileageSegmentService;
	}
	@Resource
	public void setMileageSegmentService(MileageSegmentService mileageSegmentService) {
		this.mileageSegmentService = mileageSegmentService;
	}
	
}
