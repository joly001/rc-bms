package com.zcsoft.rc.bms.mileage.controller;


import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.zcsoft.rc.bms.mileage.service.WorkSegmentService;


@Controller
@RequestMapping(value="workSegment")
public class WorkSegmentController {
	
	private WorkSegmentService workSegmentService;

	public WorkSegmentService getWorkSegmentService() {
		return workSegmentService;
	}
	@Resource
	public void setWorkSegmentService(WorkSegmentService workSegmentService) {
		this.workSegmentService = workSegmentService;
	}
	
}
