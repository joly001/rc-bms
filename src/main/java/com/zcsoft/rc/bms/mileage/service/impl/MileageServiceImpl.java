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
import com.zcsoft.rc.mileage.dao.MileageDAO;
import com.zcsoft.rc.mileage.model.entity.Mileage;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class MileageServiceImpl extends BaseServiceImpl<Mileage, java.lang.String> implements MileageService {
	
	private MileageDAO mileageDAO;

	private MileageSegmentService mileageSegmentService;

	@Resource
	public void setMileageDAO(MileageDAO mileageDAO) {
		super.setBaseDAO(mileageDAO);
		this.mileageDAO = mileageDAO;
	}
	@Resource
	public void setMileageSegmentService(MileageSegmentService mileageSegmentService) {
		this.mileageSegmentService = mileageSegmentService;
	}

	protected void verifyMileageNameExistence(String id, String mileageName) {
		Mileage mileage = new Mileage();
		mileage.setMileageName(mileageName);

		mileage = mileageDAO.query(mileage);

		if(mileage == null) {
			return;
		}

		if(mileage.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.MILEAGE_ALREADY_EXIST);
	}

	@Override
	public Mileage getByMileageName(String mileageName) {
		Mileage mileage = new Mileage();
		mileage.setMileageName(mileageName);

		return mileageDAO.query(mileage);
	}

	@Override
	public Mileage verifyMileageName(String mileageName) {
		Mileage mileage = getByMileageName(mileageName);
		verifyMileageIdExistence(mileage);

		return mileage;
	}

	@Override
	public MileageAddRsp add(MileageAddReq req) {
		verifyMileageNameExistence(null, req.getMileageName());

		Mileage mileage = new Mileage();
		BeanUtils.copyProperties(req, mileage);

		mileageDAO.insert(mileage);

		MileageAddRsp rsp = new MileageAddRsp();
		rsp.setId(mileage.getId());

		return rsp;
	}

	protected void verifyMileageIdExistence(Mileage mileage) {
		if(mileage == null) {
			throw new ValidationCubeException(ErrorConstants.MILEAGE_NOT_EXIST);
		}
	}

	@Override
	public MileageDeleteRsp delete(MileageDeleteReq req) {
		Mileage queryMileage = mileageDAO.queryById(req.getId());
		verifyMileageIdExistence(queryMileage);

		mileageSegmentService.verifyMileageIdExistence(queryMileage.getId());

		mileageDAO.deleteById(req.getId());

		MileageDeleteRsp rsp = new MileageDeleteRsp();
		rsp.setId(req.getId());

		return rsp;
	}

	@Override
	public MileageUpdateRsp update(MileageUpdateReq req) {
		Mileage queryMileage = mileageDAO.queryById(req.getId());
		verifyMileageIdExistence(queryMileage);

		verifyMileageNameExistence(req.getId(), req.getMileageName());

		Mileage mileage = new Mileage();
		BeanUtils.copyProperties(req, mileage);

		mileageDAO.updateById(mileage);

		MileageUpdateRsp rsp = new MileageUpdateRsp();
		rsp.setId(mileage.getId());

		return rsp;
	}

	@Override
	public HttpPaginationRepertory<MileageListRsp> list(HttpPaginationCondition<MileageListReq> req) {
		Mileage queryMileage = new Mileage();
		if(req.getCondition() != null) {
			queryMileage.setMileageName(req.getCondition().getMileageName());
		}
		PaginationCondition<Mileage> paginationCondition = new PaginationCondition<>();
		paginationCondition.setCondition(queryMileage);
		paginationCondition.setCurrentPage(req.getCurrentPage());
		paginationCondition.setPageSize(Constants.PAGE_SIZE);


		PaginationRepertory<Mileage> paginationRepertory = mileageDAO.queryPagination(paginationCondition);

		HttpPaginationRepertory<MileageListRsp> httpPaginationRepertory = new HttpPaginationRepertory<>(
				paginationRepertory.getTotalCount()
				,null
				,req
		);

		if(paginationRepertory.getPageItems() == null || paginationRepertory.getPageItems().isEmpty()) {
			return httpPaginationRepertory;
		}

		List<MileageListRsp> mileageListRspList = new ArrayList<>(paginationRepertory.getPageItems().size());
		paginationRepertory.getPageItems().forEach(mileage -> {
			MileageListRsp mileageListRsp = new MileageListRsp();
			BeanUtils.copyProperties(mileage, mileageListRsp);

			mileageListRspList.add(mileageListRsp);
		});
		httpPaginationRepertory.setPageItems(mileageListRspList);

		return httpPaginationRepertory;
	}
}
