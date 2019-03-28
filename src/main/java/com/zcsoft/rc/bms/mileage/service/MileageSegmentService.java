package com.zcsoft.rc.bms.mileage.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.mileage.entity.*;
import com.zcsoft.rc.mileage.model.entity.MileageSegment;


public interface MileageSegmentService extends IBaseService<MileageSegment, java.lang.String> {

    /**
     * 验证mileageId是否存在于区间中
     * @param mileageId
     */
    void verifyMileageIdExistence(String mileageId);

    /**
     * 里程区间添加
     * @param req
     * @return
     */
    MileageSegmentAddRsp add(MileageSegmentAddReq req);

    /**
     * 里程区间删除
     * @param req
     * @return
     */
    MileageSegmentDeleteRsp delete(MileageSegmentDeleteReq req);

    /**
     * 里程区间修改
     * @param req
     * @return
     */
    MileageSegmentUpdateRsp update(MileageSegmentUpdateReq req);

    /**
     * 里程区间分页查询
     * @param req
     * @return
     */
    HttpPaginationRepertory<MileageSegmentListRsp> list(HttpPaginationCondition<MileageSegmentListReq> req);

    /**
     * 里程所有查询
     * @return
     */
    MileageSegmentAllRsp all();

}
