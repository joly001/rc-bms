package com.zcsoft.rc.bms.warning.controller;


import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.warning.entity.TrainWarningListReq;
import com.zcsoft.rc.bms.api.warning.entity.TrainWarningListRsp;
import com.zcsoft.rc.bms.warning.service.TrainWarningService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;


@Controller
@RequestMapping(value="trainWarning")
public class TrainWarningController {
	
	private TrainWarningService trainWarningService;

	@Resource
	public void setTrainWarningService(TrainWarningService trainWarningService) {
		this.trainWarningService = trainWarningService;
	}

	/**
	 * 火车警告分页查询
	 * @param req
	 * @return
	 */
	@RequestMapping(value="list", method= RequestMethod.POST)
	public HttpPaginationRepertory<TrainWarningListRsp> list(HttpPaginationCondition<TrainWarningListReq> req) {
		return trainWarningService.list(req);
	}
}
