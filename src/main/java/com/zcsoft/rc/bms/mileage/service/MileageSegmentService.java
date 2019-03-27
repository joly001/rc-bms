package com.zcsoft.rc.bms.mileage.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.mileage.model.entity.MileageSegment;


public interface MileageSegmentService extends IBaseService<MileageSegment, java.lang.String> {

    /**
     *  验证mileageId是否存在于区间中
     * @param mileageId
     */
    void verifyMileageIdExistence(String mileageId);

}
