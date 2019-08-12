package com.zcsoft.rc.bms.warning.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.warning.entity.*;
import com.zcsoft.rc.warning.model.entity.WorkWarning;


public interface WorkWarningService extends IBaseService<WorkWarning, String> {

    /**
     * 警告记录,根据workWarningId查询
     * @param req
     * @return
     */
    UserWarningListRsp userWarningList(UserWarningListReq req);

    /**
     * 警告记录,报警状态
     * @return
     */
    WorkWarningWarningListRsp warningList();

    /**
     * 警告分页查询
     * @param organizationId
     * @param req
     * @return
     */
    HttpPaginationRepertory<WorkWarningListRsp> list(HttpPaginationCondition<WorkWarningListReq> req, String organizationId);

}
