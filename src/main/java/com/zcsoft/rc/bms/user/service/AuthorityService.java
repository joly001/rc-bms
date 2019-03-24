package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.user.model.entity.Authority;

import java.util.List;


public interface AuthorityService extends IBaseService<Authority, java.lang.String> {

    /**
     * 根据权限组id查询权限
     * @param authorityGroupId
     * @return
     */
    List<Authority> getByAuthorityGroupId(String authorityGroupId);
	
}
