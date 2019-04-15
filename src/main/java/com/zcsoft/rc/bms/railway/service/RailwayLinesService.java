package com.zcsoft.rc.bms.railway.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.railway.entity.*;
import com.zcsoft.rc.railway.model.entity.RailwayLines;


public interface RailwayLinesService extends IBaseService<RailwayLines, java.lang.String> {

    /**
     * 线路添加
     * @param req
     * @return
     */
    RailwayLinesAddRsp add(RailwayLinesAddReq req);

    /**
     * 线路删除
     * @param req
     * @return
     */
    RailwayLinesDeleteRsp delete(RailwayLinesDeleteReq req);

    /**
     * 线路修改
     * @param req
     * @return
     */
    RailwayLinesUpdateRsp update(RailwayLinesUpdateReq req);

    /**
     * 线路分页查询
     * @param req
     * @return
     */
    HttpPaginationRepertory<RailwayLinesListRsp> list(HttpPaginationCondition<RailwayLinesListReq> req);

    /**
     * 线路查询所有
     * @return
     */
    RailwayLinesListAllRsp all();

    /**
     * 线路详情
     * @param req
     * @return
     */
    RailwayLinesDetailsRsp details(RailwayLinesDetailsReq req);
	
}
