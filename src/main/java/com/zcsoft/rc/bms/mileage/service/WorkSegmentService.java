package com.zcsoft.rc.bms.mileage.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.mileage.entity.*;
import com.zcsoft.rc.mileage.model.entity.WorkSegment;
import com.zcsoft.rc.user.model.entity.User;

import java.util.List;


public interface WorkSegmentService extends IBaseService<WorkSegment, java.lang.String> {

    /**
     * 根据区间id查询
     * @param mileageSegmentId
     * @return
     */
    List<WorkSegment> getByMileageSegmentId(String mileageSegmentId);

    /**
     * 作业面添加
     * @param req
     * @param user
     * @return
     */
    WorkSegmentAddRsp add(WorkSegmentAddReq req, User user);

    /**
     * 作业面删除
     * @param req
     * @return
     */
    WorkSegmentDeleteRsp delete(WorkSegmentDeleteReq req);

    /**
     * 作业面修改
     * @param req
     * @param user
     * @return
     */
    WorkSegmentUpdateRsp update(WorkSegmentUpdateReq req, User user);

    /**
     * 作业面分页查询
     * @param req
     * @return
     */
    HttpPaginationRepertory<WorkSegmentListRsp> list(HttpPaginationCondition<WorkSegmentListReq> req);
	
}
