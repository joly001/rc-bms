package com.zcsoft.rc.bms.warning.controller;


import com.zcsoft.rc.bms.warning.service.TrainWarningService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;


@Controller
@RequestMapping(value="trainWarning")
public class TrainWarningController {
	
	private TrainWarningService trainWarningService;

	@Resource
	public void setTrainWarningService(TrainWarningService trainWarningService) {
		this.trainWarningService = trainWarningService;
	}
	
}
