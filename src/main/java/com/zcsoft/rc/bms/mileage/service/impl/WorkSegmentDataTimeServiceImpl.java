package com.zcsoft.rc.bms.mileage.service.impl;


import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.zcsoft.rc.bms.mileage.model.entity.WorkSegmentDataTime;
import com.zcsoft.rc.bms.mileage.dao.WorkSegmentDataTimeDAO;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.mileage.service.WorkSegmentDataTimeService;

@Service
public class WorkSegmentDataTimeServiceImpl extends BaseServiceImpl<WorkSegmentDataTime, java.lang.String> implements WorkSegmentDataTimeService {
	
	private WorkSegmentDataTimeDAO workSegmentDataTimeDAO;

	@Resource
	public void setWorkSegmentDataTimeDAO(WorkSegmentDataTimeDAO workSegmentDataTimeDAO) {
		super.setBaseDAO(workSegmentDataTimeDAO);
		this.workSegmentDataTimeDAO = workSegmentDataTimeDAO;
	}
	
	
}
