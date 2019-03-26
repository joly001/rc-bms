package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.user.entity.*;
import com.zcsoft.rc.user.model.entity.Organization;


public interface OrganizationService extends IBaseService<Organization, java.lang.String> {

    /**
     * 验证组织id是否存在
     * @param id
     */
    void verifyIdExistence(String id);

    /**
     * 组织添加
     * @param req
     * @return
     */
    OrganizationAddRsp add(OrganizationAddReq req);

    /**
     * 组织删除
     * @param req
     * @return
     */
    OrganizationDeleteRsp delete(OrganizationDeleteReq req);

    /**
     * 组织修改
     * @param req
     * @return
     */
    OrganizationUpdateRsp update(OrganizationUpdateReq req);

    /**
     * 组织查询所有
     * @return
     */
    OrganizationAllRsp all();


}
