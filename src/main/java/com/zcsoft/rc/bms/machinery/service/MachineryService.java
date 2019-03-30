package com.zcsoft.rc.bms.machinery.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.machinery.entity.*;
import com.zcsoft.rc.machinery.model.entity.Machinery;


public interface MachineryService extends IBaseService<Machinery, String> {

    /**
     * 机械添加
     * @param req
     * @return
     */
    MachineryAddRsp add(MachineryAddReq req);

    /**
     * 机械删除
     * @param req
     * @return
     */
    MachineryDeleteRsp delete(MachineryDeleteReq req);

    /**
     * 机械修改
     * @param req
     * @return
     */
    MachineryUpdateRsp update(MachineryUpdateReq req);

    /**
     * 机械分页查询
     * @param req
     * @return
     */
    HttpPaginationRepertory<MachineryListRsp> list(HttpPaginationCondition<MachineryListReq> req);
	
}
