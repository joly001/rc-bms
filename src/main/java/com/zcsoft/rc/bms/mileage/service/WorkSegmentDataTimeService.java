package com.zcsoft.rc.bms.mileage.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.mileage.entity.WorkSegmentDateTimeReq;
import com.zcsoft.rc.mileage.model.entity.WorkSegmentDataTime;

import java.util.List;


public interface WorkSegmentDataTimeService extends IBaseService<WorkSegmentDataTime, java.lang.String> {

    /**
     * 根据作业面id删除
     * @param workSegmentId
     * @return
     */
    int deleteByWorkSegmentId(String workSegmentId);

    /**
     * 添加作业面时间段
     * @param workSegmentId
     * @param workDateTimeList
     */
    void add(String workSegmentId, List<WorkSegmentDateTimeReq> workDateTimeList);
	
}
