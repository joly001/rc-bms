package com.zcsoft.rc.bms.mileage.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.mileage.service.MileageSegmentService;
import com.zcsoft.rc.mileage.dao.MileageSegmentDAO;
import com.zcsoft.rc.mileage.model.entity.MileageSegment;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class MileageSegmentServiceImpl extends BaseServiceImpl<MileageSegment, java.lang.String> implements MileageSegmentService {
	
	private MileageSegmentDAO mileageSegmentDAO;

	@Resource
	public void setMileageSegmentDAO(MileageSegmentDAO mileageSegmentDAO) {
		super.setBaseDAO(mileageSegmentDAO);
		this.mileageSegmentDAO = mileageSegmentDAO;
	}
	
	
}
