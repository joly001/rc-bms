package com.zcsoft.rc.bms.railway.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.core.util.StringUtils;
import com.sharingif.cube.persistence.database.pagination.PaginationCondition;
import com.sharingif.cube.persistence.database.pagination.PaginationRepertory;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.railway.entity.*;
import com.zcsoft.rc.bms.app.constants.Constants;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.mileage.service.MileageService;
import com.zcsoft.rc.bms.railway.service.RailwayLinesService;
import com.zcsoft.rc.mileage.model.entity.Mileage;
import com.zcsoft.rc.railway.dao.RailwayLinesDAO;
import com.zcsoft.rc.railway.model.entity.RailwayLines;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class RailwayLinesServiceImpl extends BaseServiceImpl<RailwayLines, java.lang.String> implements RailwayLinesService {
	
	private RailwayLinesDAO railwayLinesDAO;

	private MileageService mileageService;

	@Resource
	public void setRailwayLinesDAO(RailwayLinesDAO railwayLinesDAO) {
		super.setBaseDAO(railwayLinesDAO);
		this.railwayLinesDAO = railwayLinesDAO;
	}

	@Resource
	public void setMileageService(MileageService mileageService) {
		this.mileageService = mileageService;
	}

	protected void verifyrRailwayLinesNameExistence(String id,String railwayLinesName) {
		RailwayLines railwayLines = new RailwayLines();
		railwayLines.setRailwayLinesName(railwayLinesName);

		railwayLines = railwayLinesDAO.query(railwayLines);

		if(railwayLines == null) {
			return;
		}

		if(railwayLines.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.RAILWAY_LINES_NAME_ALREADY_EXIST);
	}

	protected void verifyRailwayLinesExistence(RailwayLines railwayLines) {
		if(railwayLines == null) {
			throw new ValidationCubeException(ErrorConstants.RAILWAY_LINES_NOT_EXIST);
		}
	}

	protected void handleMileage(String startMileageName, String endMileageName, RailwayLines railwayLines) {
		Mileage mileage = mileageService.verifyMileageName(startMileageName);
		railwayLines.setStartMileageId(mileage.getId());
		railwayLines.setStartLongitude(mileage.getStartLongitude());
		railwayLines.setStartLatitude(mileage.getStartLatitude());

		mileage = mileageService.verifyMileageName(endMileageName);
		railwayLines.setEndMileageId(mileage.getId());
		railwayLines.setEndLongitude(mileage.getStartLongitude());
		railwayLines.setEndLatitude(mileage.getStartLatitude());
	}

	@Override
	public RailwayLinesAddRsp add(RailwayLinesAddReq req) {
		verifyrRailwayLinesNameExistence(null, req.getRailwayLinesName());

		if(StringUtils.isTrimEmpty(req.getPreviousStationId())) {
			RailwayLines queryRailwayLines = railwayLinesDAO.queryById(req.getPreviousStationId());
			verifyRailwayLinesExistence(queryRailwayLines);
		}

		RailwayLines railwayLines = new RailwayLines();
		BeanUtils.copyProperties(req, railwayLines);

		handleMileage(req.getStartMileageName(), req.getEndMileageName(), railwayLines);

		railwayLinesDAO.insert(railwayLines);

		RailwayLinesAddRsp rsp = new RailwayLinesAddRsp();
		rsp.setId(railwayLines.getId());

		return rsp;
	}

	@Override
	public RailwayLinesDeleteRsp delete(RailwayLinesDeleteReq req) {
		RailwayLines queryRailwayLines = railwayLinesDAO.queryById(req.getId());
		verifyRailwayLinesExistence(queryRailwayLines);

		railwayLinesDAO.deleteById(req.getId());

		RailwayLinesDeleteRsp rsp = new RailwayLinesDeleteRsp();
		rsp.setId(req.getId());

		return rsp;
	}

	@Override
	public RailwayLinesUpdateRsp update(RailwayLinesUpdateReq req) {
		RailwayLines queryRailwayLines = railwayLinesDAO.queryById(req.getId());
		verifyRailwayLinesExistence(queryRailwayLines);

		verifyrRailwayLinesNameExistence(req.getId(), req.getRailwayLinesName());

		if(StringUtils.isTrimEmpty(req.getPreviousStationId())) {
			queryRailwayLines = railwayLinesDAO.queryById(req.getPreviousStationId());
			verifyRailwayLinesExistence(queryRailwayLines);
		}

		RailwayLines railwayLines = new RailwayLines();
		BeanUtils.copyProperties(req, railwayLines);

		handleMileage(req.getStartMileageName(), req.getEndMileageName(), railwayLines);

		return null;
	}

	@Override
	public HttpPaginationRepertory<RailwayLinesListRsp> list(HttpPaginationCondition<RailwayLinesListReq> req) {
		RailwayLines queryRailwayLines = new RailwayLines();
		if(req.getCondition() != null) {
			queryRailwayLines.setRailwayLinesName(req.getCondition().getRailwayLinesName());
			queryRailwayLines.setType(req.getCondition().getType());
		}
		PaginationCondition<RailwayLines> paginationCondition = new PaginationCondition<>();
		paginationCondition.setCondition(queryRailwayLines);
		paginationCondition.setCurrentPage(req.getCurrentPage());
		paginationCondition.setPageSize(Constants.PAGE_SIZE);


		PaginationRepertory<RailwayLines> paginationRepertory = railwayLinesDAO.queryPagination(paginationCondition);

		HttpPaginationRepertory<RailwayLinesListRsp> httpPaginationRepertory = new HttpPaginationRepertory<>(
				paginationRepertory.getTotalCount()
				,null
				,req
		);

		if(paginationRepertory.getPageItems() == null || paginationRepertory.getPageItems().isEmpty()) {
			return httpPaginationRepertory;
		}

		List<RailwayLinesListRsp> railwayLinesListRspList = new ArrayList<>(paginationRepertory.getPageItems().size());
		paginationRepertory.getPageItems().forEach(railwayLines -> {
			RailwayLinesListRsp railwayLinesListRsp = new RailwayLinesListRsp();
			BeanUtils.copyProperties(railwayLines, railwayLinesListRsp);

			railwayLinesListRspList.add(railwayLinesListRsp);
		});
		httpPaginationRepertory.setPageItems(railwayLinesListRspList);

		return httpPaginationRepertory;
	}

	@Override
	public RailwayLinesDetailsRsp details(RailwayLinesDetailsReq req) {
		RailwayLines queryRailwayLines = railwayLinesDAO.queryById(req.getId());
		verifyRailwayLinesExistence(queryRailwayLines);

		RailwayLinesDetailsRsp rsp = new RailwayLinesDetailsRsp();
		BeanUtils.copyProperties(queryRailwayLines, req);

		if(StringUtils.isTrimEmpty(queryRailwayLines.getPreviousStationId())) {
			RailwayLines previousRailwayLines = railwayLinesDAO.queryById(queryRailwayLines.getPreviousStationId());
			RailwayLinesDetailsRsp previousRailwayLinesDetailsRsp = new RailwayLinesDetailsRsp();
			BeanUtils.copyProperties(previousRailwayLines, previousRailwayLinesDetailsRsp);

			rsp.setPreviousStation(previousRailwayLinesDetailsRsp);
		}

		return rsp;
	}
}
