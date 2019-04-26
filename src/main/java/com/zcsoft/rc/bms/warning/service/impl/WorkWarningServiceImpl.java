package com.zcsoft.rc.bms.warning.service.impl;


import com.sharingif.cube.persistence.database.pagination.PaginationCondition;
import com.sharingif.cube.persistence.database.pagination.PaginationRepertory;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.warning.entity.WorkWarningListReq;
import com.zcsoft.rc.bms.api.warning.entity.WorkWarningListRsp;
import com.zcsoft.rc.bms.api.warning.entity.WorkWarningWarningListRsp;
import com.zcsoft.rc.bms.api.warning.entity.WorkWarningWarningRsp;
import com.zcsoft.rc.bms.app.constants.Constants;
import com.zcsoft.rc.bms.warning.service.WorkWarningService;
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

	@Resource
	public void setWorkWarningDAO(WorkWarningDAO workWarningDAO) {
		super.setBaseDAO(workWarningDAO);
		this.workWarningDAO = workWarningDAO;
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
