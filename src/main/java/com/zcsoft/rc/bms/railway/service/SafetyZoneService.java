package com.zcsoft.rc.bms.railway.service;

import com.zcsoft.rc.bms.api.railway.entity.*;

public interface SafetyZoneService {

    /**
     * 安全区域添加
     * @param req
     * @return
     */
    SafetyZoneAddRsp add(SafetyZoneAddReq req);

    /**
     * 安全区域删除
     * @param req
     * @return
     */
    SafetyZoneDeleteRsp delete(SafetyZoneDeleteReq req);

    /**
     * 安全区域删除所有
     * @return
     */
    void deleteAll();

    /**
     * 安全区域列表查询
     * @return
     */
    SafetyZoneListRsp list();

}
