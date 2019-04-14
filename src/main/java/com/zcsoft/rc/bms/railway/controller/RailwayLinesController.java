package com.zcsoft.rc.bms.railway.controller;


import com.zcsoft.rc.bms.railway.service.RailwayLinesService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;


@Controller
@RequestMapping(value="railwayLines")
public class RailwayLinesController {
	
	private RailwayLinesService railwayLinesService;

	@Resource
	public void setRailwayLinesService(RailwayLinesService railwayLinesService) {
		this.railwayLinesService = railwayLinesService;
	}
	
}
