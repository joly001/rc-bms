package com.zcsoft.rc.bms.warning.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.warning.entity.TrainWarningListReq;
import com.zcsoft.rc.bms.api.warning.entity.TrainWarningListRsp;
import com.zcsoft.rc.warning.model.entity.TrainWarning;


public interface TrainWarningService extends IBaseService<TrainWarning, java.lang.String> {

    /**
     * 火车警告分页查询
     * @param req
     * @return
     */
    HttpPaginationRepertory<TrainWarningListRsp> list(HttpPaginationCondition<TrainWarningListReq> req);
	
}
