package com.zcsoft.rc.bms.warning.service.impl;


import com.sharingif.cube.persistence.database.pagination.PaginationCondition;
import com.sharingif.cube.persistence.database.pagination.PaginationRepertory;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.warning.entity.*;
import com.zcsoft.rc.bms.app.constants.Constants;
import com.zcsoft.rc.bms.machinery.service.MachineryService;
import com.zcsoft.rc.bms.user.service.OrganizationService;
import com.zcsoft.rc.bms.user.service.UserService;
import com.zcsoft.rc.bms.warning.service.WorkWarningService;
import com.zcsoft.rc.machinery.model.entity.Machinery;
import com.zcsoft.rc.user.model.entity.Organization;
import com.zcsoft.rc.user.model.entity.User;
import com.zcsoft.rc.warning.dao.WorkWarningDAO;
import com.zcsoft.rc.warning.model.entity.WorkWarning;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class WorkWarningServiceImpl extends BaseServiceImpl<WorkWarning, String> implements WorkWarningService {
	
	private WorkWarningDAO workWarningDAO;
	private UserService userService;
	private MachineryService machineryService;
	private OrganizationService organizationService;

	@Resource
	public void setWorkWarningDAO(WorkWarningDAO workWarningDAO) {
		super.setBaseDAO(workWarningDAO);
		this.workWarningDAO = workWarningDAO;
	}
	@Resource
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	@Resource
	public void setMachineryService(MachineryService machineryService) {
		this.machineryService = machineryService;
	}
	@Resource
	public void setOrganizationService(OrganizationService organizationService) {
		this.organizationService = organizationService;
	}

	@Override
	public UserWarningListRsp userWarningList(UserWarningListReq req) {
		User user;
		if(User.BUILDER_USER_TYPE_LOCOMOTIVE.equals(req.getType())) {
			Machinery machinery = machineryService.getById(req.getId());
			user = userService.getById(machinery.getUserId());
		} else {
			user = userService.getById(req.getId());
		}

		Organization organization = organizationService.getById(user.getOrganizationId());


		UserWarningListRsp rsp = new UserWarningListRsp();
		rsp.setNick(user.getNick());
		rsp.setDepName(organization.getOrgName());
		rsp.setRoleName(userService.convertBuilderUserType(req.getType()));
		rsp.setMobile(user.getMobile());

		List<UserWarningListListRsp> list = new ArrayList<>();
		rsp.setList(list);


		WorkWarning queryWorkWarning = new WorkWarning();
		queryWorkWarning.setWorkWarningId(req.getId());
		PaginationCondition<WorkWarning> paginationCondition = new PaginationCondition<>();
		paginationCondition.setCondition(queryWorkWarning);
		paginationCondition.setCurrentPage(1);
		paginationCondition.setPageSize(Constants.PAGE_SIZE);

		PaginationRepertory<WorkWarning> paginationRepertory = workWarningDAO.queryPagination(paginationCondition);

		List<WorkWarning> workWarningList = paginationRepertory.getPageItems();
		if(workWarningList == null || workWarningList.isEmpty()) {
			return rsp;
		}

		workWarningList.forEach(workWarning -> {
			UserWarningListListRsp userWarningListListRsp = new UserWarningListListRsp();
			userWarningListListRsp.setType(workWarning.getType());
			userWarningListListRsp.setCreateTime(workWarning.getCreateTime());
			userWarningListListRsp.setWorkSegmentName(workWarning.getWorkSegmentName());

			list.add(userWarningListListRsp);
		});

		return rsp;
	}

	@Override
	public WorkWarningWarningListRsp warningList() {
		WorkWarning queryWorkWarning = new WorkWarning();
		queryWorkWarning.setStatus(WorkWarning.STATUS_CREATE);

		List<WorkWarning> workWarningList = workWarningDAO.queryList(queryWorkWarning);

		WorkWarningWarningListRsp rsp = new WorkWarningWarningListRsp();

		if(workWarningList == null || workWarningList.isEmpty()) {
			return rsp;
		}

		List<WorkWarningWarningRsp> workWarningWarningRspList = new ArrayList<>();
		rsp.setList(workWarningWarningRspList);
		workWarningList.forEach(workWarning -> {
			WorkWarningWarningRsp workWarningWarningRsp = new WorkWarningWarningRsp();
			BeanUtils.copyProperties(workWarning, workWarningWarningRsp);

			workWarningWarningRspList.add(workWarningWarningRsp);
		});

		return rsp;
	}

	@Override
	public HttpPaginationRepertory<WorkWarningListRsp> list(HttpPaginationCondition<WorkWarningListReq> req) {
		WorkWarning queryWorkWarning = new WorkWarning();
		if(req.getCondition() != null) {
			queryWorkWarning.setWorkWarningId(req.getCondition().getWorkWarningId());
		}
		PaginationCondition<WorkWarning> paginationCondition = new PaginationCondition<>();
		paginationCondition.setCondition(queryWorkWarning);
		paginationCondition.setCurrentPage(req.getCurrentPage());
		paginationCondition.setPageSize(Constants.PAGE_SIZE);

		PaginationRepertory<WorkWarning> paginationRepertory = workWarningDAO.queryPagination(paginationCondition);

		HttpPaginationRepertory<WorkWarningListRsp> httpPaginationRepertory = new HttpPaginationRepertory<>(
				paginationRepertory.getTotalCount()
				,null
				,req
		);

		if(paginationRepertory.getPageItems() == null || paginationRepertory.getPageItems().isEmpty()) {
			return httpPaginationRepertory;
		}

		List<WorkWarningListRsp> workWarningListRspList = new ArrayList<>(paginationRepertory.getPageItems().size());
		paginationRepertory.getPageItems().forEach(workWarning -> {
			WorkWarningListRsp workWarningListRsp = new WorkWarningListRsp();
			BeanUtils.copyProperties(workWarning, workWarningListRsp);

			workWarningListRspList.add(workWarningListRsp);
		});
		httpPaginationRepertory.setPageItems(workWarningListRspList);

		return httpPaginationRepertory;

	}
}
