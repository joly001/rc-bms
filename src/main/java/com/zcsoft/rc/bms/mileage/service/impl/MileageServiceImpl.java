package com.zcsoft.rc.bms.mileage.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.mileage.service.MileageService;
import com.zcsoft.rc.mileage.dao.MileageDAO;
import com.zcsoft.rc.mileage.model.entity.Mileage;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class MileageServiceImpl extends BaseServiceImpl<Mileage, java.lang.String> implements MileageService {
	
	private MileageDAO mileageDAO;

	@Resource
	public void setMileageDAO(MileageDAO mileageDAO) {
		super.setBaseDAO(mileageDAO);
		this.mileageDAO = mileageDAO;
	}
	
	
}
