package com.zcsoft.rc.bms.mileage.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.mileage.entity.*;
import com.zcsoft.rc.mileage.model.entity.Mileage;


public interface MileageService extends IBaseService<Mileage, java.lang.String> {

    /**
     * 根据名称查询
     * @param mileageName
     * @return
     */
    Mileage getByMileageName(String mileageName);

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
    MileageDeleteRsp delete(MileageDeleteReq req);

    /**
     * 里程修改
     * @param req
     * @return
     */
    MileageUpdateRsp update(MileageUpdateReq req);

    /**
     * 里程分页查询
     * @param req
     * @return
     */
    HttpPaginationRepertory<MileageListRsp> list(HttpPaginationCondition<MileageListReq> req);
	
}
