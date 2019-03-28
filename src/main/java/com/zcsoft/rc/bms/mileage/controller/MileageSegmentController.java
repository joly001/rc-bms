package com.zcsoft.rc.bms.mileage.controller;


import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.mileage.entity.*;
import com.zcsoft.rc.bms.mileage.service.MileageSegmentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.validation.Valid;


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

	/**
	 * 里程区间添加
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public MileageSegmentAddRsp add(@Valid MileageSegmentAddReq req) {
		return mileageSegmentService.add(req);
	}

	/**
	 * 里程区间删除
	 * @param req
	 * @return
	 */
	@RequestMapping(value="delete", method= RequestMethod.POST)
	public MileageSegmentDeleteRsp delete(@Valid MileageSegmentDeleteReq req) {
		return mileageSegmentService.delete(req);
	}

	/**
	 * 里程区间修改
	 */
	@RequestMapping(value="update", method= RequestMethod.POST)
	public MileageSegmentUpdateRsp update(@Valid MileageSegmentUpdateReq req) {
		return mileageSegmentService.update(req);
	}

	/**
	 * 里程区间分页查询
	 */
	@RequestMapping(value="list", method= RequestMethod.POST)
	public HttpPaginationRepertory<MileageSegmentListRsp> list(@Valid HttpPaginationCondition<MileageSegmentListReq> req) {
		return mileageSegmentService.list(req);
	}

	/**
	 * 里程区间查询所有
	 */
	@RequestMapping(value="all", method= RequestMethod.POST)
	public MileageSegmentAllRsp all() {
		return mileageSegmentService.all();
	}

}
