package com.zcsoft.rc.bms.mileage.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.mileage.entity.MileageAddReq;
import com.zcsoft.rc.bms.api.mileage.entity.MileageAddRsp;
import com.zcsoft.rc.bms.api.mileage.entity.MileageDeteleReq;
import com.zcsoft.rc.bms.api.mileage.entity.MileageDeteleRsp;
import com.zcsoft.rc.mileage.model.entity.Mileage;


public interface MileageService extends IBaseService<Mileage, java.lang.String> {

    /**
     * 里程添加
     * @param req
     * @return
     */
    MileageAddRsp add(MileageAddReq req);

    /**
     * 里程删除
     * @param req
     * @return
     */
    MileageDeteleRsp delete(MileageDeteleReq req);
	
}
