package com.zcsoft.rc.bms.mileage.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.persistence.database.pagination.PaginationCondition;
import com.sharingif.cube.persistence.database.pagination.PaginationRepertory;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.mileage.entity.*;
import com.zcsoft.rc.bms.app.constants.Constants;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.mileage.service.MileageService;
import com.zcsoft.rc.bms.mileage.service.WorkSegmentService;
import com.zcsoft.rc.mileage.dao.WorkSegmentDAO;
import com.zcsoft.rc.mileage.model.entity.Mileage;
import com.zcsoft.rc.mileage.model.entity.WorkSegment;
import com.zcsoft.rc.user.model.entity.User;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WorkSegmentServiceImpl extends BaseServiceImpl<WorkSegment, java.lang.String> implements WorkSegmentService {
	
	private WorkSegmentDAO workSegmentDAO;
	private MileageService mileageService;

	@Resource
	public void setWorkSegmentDAO(WorkSegmentDAO workSegmentDAO) {
		super.setBaseDAO(workSegmentDAO);
		this.workSegmentDAO = workSegmentDAO;
	}
	@Resource
	public void setMileageService(MileageService mileageService) {
		this.mileageService = mileageService;
	}

	protected void verifyWorkSegmentNameExistence(String id, String workSegmentName) {
		WorkSegment workSegment = new WorkSegment();
		workSegment.setWorkSegmentName(workSegmentName);

		workSegment = workSegmentDAO.query(workSegment);

		if(workSegment == null) {
			return;
		}

		if(workSegment.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.WORKSEGMENT_ALREADY_EXIST);
	}

	protected void handleMileageSegment(String startMileageName, String endMileageName, WorkSegment workSegment) {
		Mileage mileage = mileageService.verifyMileageName(startMileageName);
		workSegment.setStartMileageId(mileage.getId());
		workSegment.setStartLongitude(mileage.getStartLongitude());
		workSegment.setStartLatitude(mileage.getStartLatitude());

		mileage = mileageService.verifyMileageName(endMileageName);
		workSegment.setEndMileageId(mileage.getId());
		workSegment.setEndLongitude(mileage.getEndLongitude());
		workSegment.setEndLatitude(mileage.getEndLatitude());
	}

	@Override
	public List<WorkSegment> getByMileageSegmentId(String mileageSegmentId) {
		WorkSegment workSegment = new WorkSegment();
		workSegment.setMileageSegmentId(mileageSegmentId);

		return workSegmentDAO.queryList(workSegment);
	}

	@Override
	public WorkSegmentAddRsp add(WorkSegmentAddReq req, User user) {
		verifyWorkSegmentNameExistence(null, req.getWorkSegmentName());

		WorkSegment workSegment = new WorkSegment();
		BeanUtils.copyProperties(req, workSegment);
		workSegment.setSubmitUserId(user.getId());
		workSegment.setSubmitUserName(user.getNick());
		workSegment.setSubmitTime(new Date());

		handleMileageSegment(req.getStartMileageName(), req.getEndMileageName(), workSegment);

		workSegmentDAO.insert(workSegment);

		WorkSegmentAddRsp rsp = new WorkSegmentAddRsp();
		rsp.setId(workSegment.getId());

		return rsp;
	}

	protected void verifyWorkSegmentIdExistence(WorkSegment workSegment) {
		if(workSegment == null) {
			throw new ValidationCubeException(ErrorConstants.WORKSEGMENT_NOT_EXIST);
		}
	}

	@Override
	public WorkSegmentDeleteRsp delete(WorkSegmentDeleteReq req) {
		WorkSegment workSegment = workSegmentDAO.queryById(req.getId());
		verifyWorkSegmentIdExistence(workSegment);

		workSegmentDAO.deleteById(req.getId());

		WorkSegmentDeleteRsp rsp = new WorkSegmentDeleteRsp();
		rsp.setId(req.getId());

		return rsp;
	}

	@Override
	public WorkSegmentUpdateRsp update(WorkSegmentUpdateReq req, User user) {
		WorkSegment workSegment = workSegmentDAO.queryById(req.getId());
		verifyWorkSegmentIdExistence(workSegment);

		verifyWorkSegmentNameExistence(req.getId(), req.getWorkSegmentName());

		workSegment = new WorkSegment();
		BeanUtils.copyProperties(req, workSegment);
		workSegment.setSubmitUserId(user.getId());
		workSegment.setSubmitUserName(user.getNick());
		workSegment.setSubmitTime(new Date());

		handleMileageSegment(req.getStartMileageName(), req.getEndMileageName(), workSegment);

		workSegmentDAO.updateById(workSegment);

		WorkSegmentUpdateRsp rsp = new WorkSegmentUpdateRsp();
		rsp.setId(req.getId());

		return rsp;
	}

	@Override
	public HttpPaginationRepertory<WorkSegmentListRsp> list(HttpPaginationCondition<WorkSegmentListReq> req) {
		WorkSegment queryWorkSegment = new WorkSegment();
		if(req.getCondition() != null) {
			queryWorkSegment.setWorkSegmentName(req.getCondition().getWorkSegmentName());
			queryWorkSegment.setMileageSegmentName(req.getCondition().getMileageSegmentName());
			queryWorkSegment.setWorkDate(req.getCondition().getWorkDate());
		}
		PaginationCondition<WorkSegment> paginationCondition = new PaginationCondition<>();
		paginationCondition.setCondition(queryWorkSegment);
		paginationCondition.setCurrentPage(req.getCurrentPage());
		paginationCondition.setPageSize(Constants.PAGE_SIZE);


		PaginationRepertory<WorkSegment> paginationRepertory = workSegmentDAO.queryPagination(paginationCondition);

		HttpPaginationRepertory<WorkSegmentListRsp> httpPaginationRepertory = new HttpPaginationRepertory<>(
				paginationRepertory.getTotalCount()
				,null
				,req
		);

		if(paginationRepertory.getPageItems() == null || paginationRepertory.getPageItems().isEmpty()) {
			return httpPaginationRepertory;
		}

		List<WorkSegmentListRsp> workSegmentListRspList = new ArrayList<>(paginationRepertory.getPageItems().size());
		paginationRepertory.getPageItems().forEach(workSegment -> {
			WorkSegmentListRsp workSegmentListRsp = new WorkSegmentListRsp();
			BeanUtils.copyProperties(workSegment, workSegmentListRsp);

			workSegmentListRspList.add(workSegmentListRsp);
		});
		httpPaginationRepertory.setPageItems(workSegmentListRspList);

		return httpPaginationRepertory;
	}

	@Override
	public WorkSegmentListListRsp mileageWorkSegment(MileageWorkSegmentReq req) {
		WorkSegment queryWorkSegment = new WorkSegment();
		queryWorkSegment.setMileageSegmentId(req.getMileageSegmentId());
		List<WorkSegment> workSegmentList = workSegmentDAO.queryList(queryWorkSegment);

		WorkSegmentListListRsp rsp = new WorkSegmentListListRsp();

		if(workSegmentList == null) {
			return rsp;
		}

		List<WorkSegmentListRsp> workSegmentListRspList = new ArrayList<>(workSegmentList.size());
		workSegmentList.forEach(workSegment -> {
			WorkSegmentListRsp workSegmentListRsp = new WorkSegmentListRsp();
			BeanUtils.copyProperties(workSegment, workSegmentListRsp);

			workSegmentListRspList.add(workSegmentListRsp);
		});

		rsp.setList(workSegmentListRspList);

		return rsp;
	}
}
