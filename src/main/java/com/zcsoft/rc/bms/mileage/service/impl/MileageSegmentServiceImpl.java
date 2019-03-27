package com.zcsoft.rc.bms.mileage.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
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


	@Override
	public void verifyMileageIdExistence(String mileageId) {
		MileageSegment mileageSegment = new MileageSegment();
		mileageSegment.setStartMileageId(mileageId);

		mileageSegment = mileageSegmentDAO.query(mileageSegment);

		if(mileageSegment == null) {
			mileageSegment = new MileageSegment();
			mileageSegment.setEndMileageId(mileageId);
			mileageSegment = mileageSegmentDAO.query(mileageSegment);

			if(mileageSegment == null) {
				return;
			}

		}

		throw new ValidationCubeException(ErrorConstants.MILEAGE_HAS_MILEAGE_SEGMENT_CAN_NOT_DELETE);

	}
}
