package com.zcsoft.rc.bms.railway.controller;


import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.railway.entity.*;
import com.zcsoft.rc.bms.railway.service.RailwayLinesService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;


@Controller
@RequestMapping(value="railwayLines")
public class RailwayLinesController {
	
	private RailwayLinesService railwayLinesService;

	@Resource
	public void setRailwayLinesService(RailwayLinesService railwayLinesService) {
		this.railwayLinesService = railwayLinesService;
	}

	/**
	 * 线路添加
	 * @param req
	 * @return
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public RailwayLinesAddRsp add(RailwayLinesAddReq req) {
		return railwayLinesService.add(req);
	}

	/**
	 * 线路删除
	 * @param req
	 * @return
	 */
	@RequestMapping(value="delete", method= RequestMethod.POST)
	public RailwayLinesDeleteRsp delete(RailwayLinesDeleteReq req) {
		return railwayLinesService.delete(req);
	}

	/**
	 * 线路修改
	 * @param req
	 * @return
	 */
	@RequestMapping(value="update", method= RequestMethod.POST)
	public RailwayLinesUpdateRsp update(RailwayLinesUpdateReq req) {
		return railwayLinesService.update(req);
	}

	/**
	 * 线路分页查询
	 * @param req
	 * @return
	 */
	@RequestMapping(value="list", method= RequestMethod.POST)
	public HttpPaginationRepertory<RailwayLinesListRsp> list(HttpPaginationCondition<RailwayLinesListReq> req) {
		return railwayLinesService.list(req);
	}

	/**
	 * 线路详情
	 * @param req
	 * @return
	 */
	@RequestMapping(value="details", method= RequestMethod.POST)
	public RailwayLinesDetailsRsp details(RailwayLinesDetailsReq req) {
		return railwayLinesService.details(req);
	}
	
}
