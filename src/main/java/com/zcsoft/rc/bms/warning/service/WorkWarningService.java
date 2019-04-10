package com.zcsoft.rc.bms.warning.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.warning.entity.WorkWarningListReq;
import com.zcsoft.rc.bms.api.warning.entity.WorkWarningListRsp;
import com.zcsoft.rc.bms.api.warning.entity.WorkWarningWarningListRsp;
import com.zcsoft.rc.warning.model.entity.WorkWarning;


public interface WorkWarningService extends IBaseService<WorkWarning, String> {

    /**
     * 警告记录,报警状态
     */
    WorkWarningWarningListRsp warningList();

    /**
     * 警告分页查询
     * @param req
     * @return
     */
    HttpPaginationRepertory<WorkWarningListRsp> list(HttpPaginationCondition<WorkWarningListReq> req);

}
