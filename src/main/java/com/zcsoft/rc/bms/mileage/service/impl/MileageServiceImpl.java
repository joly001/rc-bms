package com.zcsoft.rc.bms.mileage.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.mileage.entity.MileageAddReq;
import com.zcsoft.rc.bms.api.mileage.entity.MileageAddRsp;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.mileage.service.MileageService;
import com.zcsoft.rc.mileage.dao.MileageDAO;
import com.zcsoft.rc.mileage.model.entity.Mileage;
import org.springframework.beans.BeanUtils;
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


	protected void verifyMileageNameExistence(String id, String mileageName) {
		Mileage mileage = new Mileage();
		mileage.setMileageName(mileageName);

		mileage = mileageDAO.query(mileage);

		if(mileage == null) {
			return;
		}

		if(mileage.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.MILEAGE_ALREADY_EXIST);
	}

	@Override
	public MileageAddRsp add(MileageAddReq req) {
		verifyMileageNameExistence(null, req.getMileageName());

		if(req.getStartLongitude().doubleValue() != req.getEndLongitude().doubleValue()) {
			throw new ValidationCubeException(ErrorConstants.MILEAGE_LONGITUDE_NOT_EQUALS);
		}

		Mileage mileage = new Mileage();
		BeanUtils.copyProperties(req, mileage);

		mileageDAO.insert(mileage);

		MileageAddRsp rsp = new MileageAddRsp();
		rsp.setId(mileage.getId());

		return rsp;
	}
}
