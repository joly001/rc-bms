package com.zcsoft.rc.bms.mileage.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.mileage.entity.WorkSegmentDateTimeReq;
import com.zcsoft.rc.bms.mileage.service.WorkSegmentDataTimeService;
import com.zcsoft.rc.mileage.dao.WorkSegmentDataTimeDAO;
import com.zcsoft.rc.mileage.model.entity.WorkSegmentDataTime;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class WorkSegmentDataTimeServiceImpl extends BaseServiceImpl<WorkSegmentDataTime, java.lang.String> implements WorkSegmentDataTimeService {
	
	private WorkSegmentDataTimeDAO workSegmentDataTimeDAO;

	@Resource
	public void setWorkSegmentDataTimeDAO(WorkSegmentDataTimeDAO workSegmentDataTimeDAO) {
		super.setBaseDAO(workSegmentDataTimeDAO);
		this.workSegmentDataTimeDAO = workSegmentDataTimeDAO;
	}


	@Override
	public int deleteByWorkSegmentId(String workSegmentId) {
		WorkSegmentDataTime deleteWorkSegmentDataTime = new WorkSegmentDataTime();
		deleteWorkSegmentDataTime.setWorkSegmentId(workSegmentId);

		return workSegmentDataTimeDAO.deleteByCondition(deleteWorkSegmentDataTime);
	}

	@Override
	public void add(String workSegmentId, List<WorkSegmentDateTimeReq> workDateTimeList) {
		if(workDateTimeList == null || workDateTimeList.isEmpty()) {
			return;
		}

		workDateTimeList.forEach(workSegmentDateTimeReq -> {
			WorkSegmentDataTime workSegmentDataTime = new WorkSegmentDataTime();
			workSegmentDataTime.setWorkSegmentId(workSegmentId);
			workSegmentDataTime.setStartworkTime(workSegmentDateTimeReq.getStartworkTime());
			workSegmentDataTime.setEndWorkTime(workSegmentDateTimeReq.getEndWorkTime());

			add(workSegmentDataTime);
		});
	}
}
