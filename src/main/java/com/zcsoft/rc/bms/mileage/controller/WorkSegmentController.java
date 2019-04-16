package com.zcsoft.rc.bms.mileage.controller;


import com.sharingif.cube.core.handler.bind.annotation.DataContainer;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.mileage.entity.*;
import com.zcsoft.rc.bms.mileage.service.WorkSegmentService;
import com.zcsoft.rc.user.model.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.validation.Valid;


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

	/**
	 * 作业面添加
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public WorkSegmentAddRsp add(@Valid WorkSegmentAddReq req, @DataContainer User user) {
		return workSegmentService.add(req, user);
	}

	/**
	 * 作业面删除
	 * @param req
	 * @return
	 */
	@RequestMapping(value="delete", method= RequestMethod.POST)
	public WorkSegmentDeleteRsp delete(@Valid WorkSegmentDeleteReq req) {
		return workSegmentService.delete(req);
	}

	/**
	 * 作业面修改
	 */
	@RequestMapping(value="update", method= RequestMethod.POST)
	public WorkSegmentUpdateRsp update(@Valid WorkSegmentUpdateReq req, @DataContainer User user) {
		return workSegmentService.update(req, user);
	}

	/**
	 * 作业面分页查询
	 */
	@RequestMapping(value="list", method= RequestMethod.POST)
	public HttpPaginationRepertory<WorkSegmentListRsp> list(@Valid HttpPaginationCondition<WorkSegmentListReq> req) {
		return workSegmentService.list(req);
	}

	/**
	 * 作业面作业时间查询
	 */
	@RequestMapping(value="workSegmentDataTimeList", method= RequestMethod.POST)
	public WorkSegmentDataTimeListListRsp workSegmentDataTimeList(WorkSegmentDataTimeListReq req) {
		return workSegmentService.workSegmentDataTimeList(req);
	}

	/**
	 * 作业面列表，根据里程查询
	 */
	@RequestMapping(value="mileageWorkSegment", method= RequestMethod.POST)
	public WorkSegmentListListRsp mileageWorkSegment(MileageWorkSegmentReq req) {
		return workSegmentService.mileageWorkSegment(req);
	}
	
}
