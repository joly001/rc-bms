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
import com.zcsoft.rc.bms.mileage.service.MileageSegmentService;
import com.zcsoft.rc.bms.mileage.service.MileageService;
import com.zcsoft.rc.mileage.dao.MileageSegmentDAO;
import com.zcsoft.rc.mileage.model.entity.Mileage;
import com.zcsoft.rc.mileage.model.entity.MileageSegment;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class MileageSegmentServiceImpl extends BaseServiceImpl<MileageSegment, java.lang.String> implements MileageSegmentService {
	
	private MileageSegmentDAO mileageSegmentDAO;

	private MileageService mileageService;

	@Resource
	public void setMileageSegmentDAO(MileageSegmentDAO mileageSegmentDAO) {
		super.setBaseDAO(mileageSegmentDAO);
		this.mileageSegmentDAO = mileageSegmentDAO;
	}
	@Resource
	public void setMileageService(MileageService mileageService) {
		this.mileageService = mileageService;
	}

	@Override
	public void verifyMileageIdExistence(String mileageId) {
		MileageSegment mileageSegment = new MileageSegment();
		mileageSegment.setStartMileageId(mileageId);

		mileageSegment = mileageSegmentDAO.query(mileageSegment);

		if(mileageSegment == null) {
			mileageSegment = new MileageSegment();
			mileageSegment.setEndMileageId(mileageId);
			mileageSegment = mileageSegmentDAO.query(mileageSegment);

			if(mileageSegment == null) {
				return;
			}

		}

		throw new ValidationCubeException(ErrorConstants.MILEAGE_HAS_MILEAGE_SEGMENT_CAN_NOT_DELETE);

	}

	protected void verifyMileageSegmentNameExistence(String id, String mileageSegmentName) {
		MileageSegment mileageSegment = new MileageSegment();
		mileageSegment.setMileageSegmentName(mileageSegmentName);

		mileageSegment = mileageSegmentDAO.query(mileageSegment);

		if(mileageSegment == null) {
			return;
		}

		if(mileageSegment.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.MILEAGESEGMENT_ALREADY_EXIST);
	}

	protected void mileageIsNull(Mileage mileage) {
		if (mileage == null) {
			throw new ValidationCubeException(ErrorConstants.MILEAGE_NOT_EXIST);
		}
	}

	protected void handleMileageSegment(String startMileageName, String endMileageName, MileageSegment mileageSegment) {
		Mileage mileage = mileageService.getByMileageName(startMileageName);
		mileageIsNull(mileage);
		mileageSegment.setStartMileageId(mileage.getId());
		mileageSegment.setStartLongitude(mileage.getStartLongitude());
		mileageSegment.setStartLatitude(mileage.getStartLatitude());
		mileage = mileageService.getByMileageName(endMileageName);
		mileageIsNull(mileage);
		mileageSegment.setEndMileageId(mileage.getId());
		mileageSegment.setEndLongitude(mileage.getEndLongitude());
		mileageSegment.setEndLatitude(mileage.getEndLatitude());
	}

	@Override
	public MileageSegmentAddRsp add(MileageSegmentAddReq req) {
		verifyMileageSegmentNameExistence(null, req.getMileageSegmentName());

		MileageSegment mileageSegment = new MileageSegment();
		BeanUtils.copyProperties(req, mileageSegment);

		handleMileageSegment(req.getStartMileageName(), req.getEndMileageName(), mileageSegment);

		mileageSegmentDAO.insert(mileageSegment);

		MileageSegmentAddRsp rsp = new MileageSegmentAddRsp();
		rsp.setId(mileageSegment.getId());

		return rsp;
	}

	protected void verifyMileageSegmentIdExistence(MileageSegment mileageSegment) {
		if(mileageSegment == null) {
			throw new ValidationCubeException(ErrorConstants.MILEAGESEGMENT_NOT_EXIST);
		}
	}

	@Override
	public MileageSegmentDeleteRsp delete(MileageSegmentDeleteReq req) {
		MileageSegment queryMileageSegment = mileageSegmentDAO.queryById(req.getId());
		verifyMileageSegmentIdExistence(queryMileageSegment);

		//TODO 如果存在作业面不能删除

		mileageSegmentDAO.deleteById(req.getId());

		MileageSegmentDeleteRsp rsp = new MileageSegmentDeleteRsp();
		rsp.setId(req.getId());

		return rsp;
	}

	@Override
	public MileageSegmentUpdateRsp update(MileageSegmentUpdateReq req) {
		MileageSegment queryMileageSegment = mileageSegmentDAO.queryById(req.getId());
		verifyMileageSegmentIdExistence(queryMileageSegment);

		verifyMileageSegmentNameExistence(req.getId(), req.getMileageSegmentName());

		MileageSegment mileageSegment = new MileageSegment();
		BeanUtils.copyProperties(req, mileageSegment);

		handleMileageSegment(req.getStartMileageName(), req.getEndMileageName(), mileageSegment);

		mileageSegmentDAO.updateById(mileageSegment);

		MileageSegmentUpdateRsp rsp = new MileageSegmentUpdateRsp();
		rsp.setId(mileageSegment.getId());

		return rsp;
	}

	@Override
	public HttpPaginationRepertory<MileageSegmentListRsp> list(HttpPaginationCondition<MileageSegmentListReq> req) {

		PaginationCondition<MileageSegment> paginationCondition = new PaginationCondition<>();
		paginationCondition.setCurrentPage(req.getCurrentPage());
		paginationCondition.setPageSize(Constants.PAGE_SIZE);


		PaginationRepertory<MileageSegment> paginationRepertory = mileageSegmentDAO.queryPagination(paginationCondition);

		HttpPaginationRepertory<MileageSegmentListRsp> httpPaginationRepertory = new HttpPaginationRepertory<>(
				paginationRepertory.getTotalCount()
				,null
				,req
		);

		if(paginationRepertory.getPageItems() == null || paginationRepertory.getPageItems().isEmpty()) {
			return httpPaginationRepertory;
		}

		List<MileageSegmentListRsp> mileageSegmentListRspRspList = new ArrayList<>(paginationRepertory.getPageItems().size());
		paginationRepertory.getPageItems().forEach(mileage -> {
			MileageSegmentListRsp mileageSegmentListRsp = new MileageSegmentListRsp();
			BeanUtils.copyProperties(mileage, mileageSegmentListRsp);

			mileageSegmentListRspRspList.add(mileageSegmentListRsp);
		});
		httpPaginationRepertory.setPageItems(mileageSegmentListRspRspList);

		return httpPaginationRepertory;

	}
}
