package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.AuthorityGroup;

import java.util.List;


public interface AuthorityGroupService extends IBaseService<AuthorityGroup, java.lang.String> {

    /**
     * 根据权限组id获得权限
     * @param authorityGroupId
     * @return
     */
    List<Authority> getAuthorityByAuthorityGroup(String authorityGroupId);
	
}
