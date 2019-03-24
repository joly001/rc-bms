package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.user.entity.*;
import com.zcsoft.rc.user.model.entity.Organization;


public interface OrganizationService extends IBaseService<Organization, java.lang.String> {

    /**
     * 添加组织信息
     * @param req
     * @return
     */
    OrganizationAddRsp add(OrganizationAddReq req);

    /**
     * 删除组织
     * @param req
     * @return
     */
    OrganizationDeleteRsp delete(OrganizationDeleteReq req);

    /**
     * 修改组织
     * @param req
     * @return
     */
    OrganizationUpdateRsp update(OrganizationUpdateReq req);


}
