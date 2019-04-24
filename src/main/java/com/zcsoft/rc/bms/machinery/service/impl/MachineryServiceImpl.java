package com.zcsoft.rc.bms.machinery.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.persistence.database.pagination.PaginationCondition;
import com.sharingif.cube.persistence.database.pagination.PaginationRepertory;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.machinery.entity.*;
import com.zcsoft.rc.bms.app.constants.Constants;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.machinery.service.MachineryService;
import com.zcsoft.rc.bms.user.service.UserService;
import com.zcsoft.rc.machinery.dao.MachineryDAO;
import com.zcsoft.rc.machinery.model.entity.Machinery;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class MachineryServiceImpl extends BaseServiceImpl<Machinery, String> implements MachineryService {
	
	private MachineryDAO machineryDAO;

	private UserService userService;


	@Resource
	public void setMachineryDAO(MachineryDAO machineryDAO) {
		super.setBaseDAO(machineryDAO);
		this.machineryDAO = machineryDAO;
	}
	@Resource
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	protected void verifyPlateNumberExistence(String id, String plateNumber) {
		Machinery machinery = new Machinery();
		machinery.setPlateNumber(plateNumber);

		machinery = machineryDAO.query(machinery);

		if(machinery == null) {
			return;
		}

		if(machinery.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.MACHINERY_PLATENUMBER_ALREADY_EXIST);
	}

	protected void verifyWristStrapCodeExistence(String id, String wristStrapCode) {
		Machinery machinery = new Machinery();
		machinery.setWristStrapCode(wristStrapCode);

		machinery = machineryDAO.query(machinery);

		if(machinery == null) {
			return;
		}

		if(machinery.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.MACHINERY_WRISTSTRAPCODE_ALREADY_EXIST);
	}

	@Override
	public MachineryAddRsp add(MachineryAddReq req) {
		verifyPlateNumberExistence(null, req.getPlateNumber());

		verifyWristStrapCodeExistence(null, req.getWristStrapCode());

		userService.verifyIdExistence(req.getUserId());

		Machinery machinery = new Machinery();
		BeanUtils.copyProperties(req, machinery);

		machineryDAO.insert(machinery);

		MachineryAddRsp rsp = new MachineryAddRsp();
		rsp.setId(machinery.getId());

		return rsp;
	}

	protected void verifyRoleIdExistence(Machinery machinery) {
		if(machinery == null) {
			throw new ValidationCubeException(ErrorConstants.MACHINERY_NOT_EXIST);
		}
	}

	@Override
	public MachineryDeleteRsp delete(MachineryDeleteReq req) {
		Machinery machinery = machineryDAO.queryById(req.getId());
		verifyRoleIdExistence(machinery);

		machineryDAO.deleteById(req.getId());

		MachineryDeleteRsp rsp = new MachineryDeleteRsp();
		rsp.setId(req.getId());

		return rsp;
	}

	@Override
	public MachineryUpdateRsp update(MachineryUpdateReq req) {
		Machinery queryMachinery = machineryDAO.queryById(req.getId());
		verifyRoleIdExistence(queryMachinery);

		verifyPlateNumberExistence(queryMachinery.getId(), req.getPlateNumber());

		verifyWristStrapCodeExistence(queryMachinery.getId(), req.getWristStrapCode());

		userService.verifyIdExistence(req.getUserId());

		Machinery machinery = new Machinery();
		BeanUtils.copyProperties(req, machinery);

		machineryDAO.updateById(machinery);

		MachineryUpdateRsp rsp = new MachineryUpdateRsp();
		rsp.setId(machinery.getId());

		return rsp;
	}

	@Override
	public HttpPaginationRepertory<MachineryListRsp> list(HttpPaginationCondition<MachineryListReq> req) {
		Machinery queryMachinery = new Machinery();
		if(req.getCondition() != null) {
			queryMachinery.setWristStrapCode(req.getCondition().getCondition());
			queryMachinery.setMachineryName(req.getCondition().getCondition());
			queryMachinery.setNick(req.getCondition().getCondition());
		}
		PaginationCondition<Machinery> paginationCondition = new PaginationCondition<>();
		paginationCondition.setCondition(queryMachinery);
		paginationCondition.setCurrentPage(req.getCurrentPage());
		paginationCondition.setPageSize(Constants.PAGE_SIZE);


		PaginationRepertory<Machinery> paginationRepertory = machineryDAO.queryPagination(paginationCondition);

		HttpPaginationRepertory<MachineryListRsp> httpPaginationRepertory = new HttpPaginationRepertory<>(
				paginationRepertory.getTotalCount()
				,null
				,req
		);

		if(paginationRepertory.getPageItems() == null || paginationRepertory.getPageItems().isEmpty()) {
			return httpPaginationRepertory;
		}

		List<MachineryListRsp> machineryListRspList = new ArrayList<>(paginationRepertory.getPageItems().size());
		paginationRepertory.getPageItems().forEach(machinery -> {
			MachineryListRsp machineryListRsp = new MachineryListRsp();
			BeanUtils.copyProperties(machinery, machineryListRsp);

			machineryListRspList.add(machineryListRsp);
		});
		httpPaginationRepertory.setPageItems(machineryListRspList);

		return httpPaginationRepertory;
	}
}
