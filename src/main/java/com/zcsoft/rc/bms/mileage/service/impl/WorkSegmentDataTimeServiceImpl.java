package com.zcsoft.rc.bms.mileage.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.mileage.service.WorkSegmentDataTimeService;
import com.zcsoft.rc.mileage.dao.WorkSegmentDataTimeDAO;
import com.zcsoft.rc.mileage.model.entity.WorkSegmentDataTime;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class WorkSegmentDataTimeServiceImpl extends BaseServiceImpl<WorkSegmentDataTime, java.lang.String> implements WorkSegmentDataTimeService {
	
	private WorkSegmentDataTimeDAO workSegmentDataTimeDAO;

	@Resource
	public void setWorkSegmentDataTimeDAO(WorkSegmentDataTimeDAO workSegmentDataTimeDAO) {
		super.setBaseDAO(workSegmentDataTimeDAO);
		this.workSegmentDataTimeDAO = workSegmentDataTimeDAO;
	}
	
	
}
