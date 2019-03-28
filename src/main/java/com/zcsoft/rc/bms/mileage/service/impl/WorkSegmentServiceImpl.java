package com.zcsoft.rc.bms.mileage.service.impl;


import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.zcsoft.rc.bms.mileage.model.entity.WorkSegment;
import com.zcsoft.rc.bms.mileage.dao.WorkSegmentDAO;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.mileage.service.WorkSegmentService;

@Service
public class WorkSegmentServiceImpl extends BaseServiceImpl<WorkSegment, java.lang.String> implements WorkSegmentService {
	
	private WorkSegmentDAO workSegmentDAO;

	@Resource
	public void setWorkSegmentDAO(WorkSegmentDAO workSegmentDAO) {
		super.setBaseDAO(workSegmentDAO);
		this.workSegmentDAO = workSegmentDAO;
	}
	
	
}
