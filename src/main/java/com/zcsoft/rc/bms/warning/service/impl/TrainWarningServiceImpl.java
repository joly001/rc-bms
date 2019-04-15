package com.zcsoft.rc.bms.warning.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.warning.service.TrainWarningService;
import com.zcsoft.rc.warning.dao.TrainWarningDAO;
import com.zcsoft.rc.warning.model.entity.TrainWarning;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class TrainWarningServiceImpl extends BaseServiceImpl<TrainWarning, java.lang.String> implements TrainWarningService {
	
	private TrainWarningDAO trainWarningDAO;

	@Resource
	public void setTrainWarningDAO(TrainWarningDAO trainWarningDAO) {
		super.setBaseDAO(trainWarningDAO);
		this.trainWarningDAO = trainWarningDAO;
	}
	
	
}
