package com.zcsoft.rc.bms.mileage.controller;


import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.zcsoft.rc.bms.mileage.service.WorkSegmentDataTimeService;


@Controller
@RequestMapping(value="workSegmentDataTime")
public class WorkSegmentDataTimeController {
	
	private WorkSegmentDataTimeService workSegmentDataTimeService;

	public WorkSegmentDataTimeService getWorkSegmentDataTimeService() {
		return workSegmentDataTimeService;
	}
	@Resource
	public void setWorkSegmentDataTimeService(WorkSegmentDataTimeService workSegmentDataTimeService) {
		this.workSegmentDataTimeService = workSegmentDataTimeService;
	}
	
}
