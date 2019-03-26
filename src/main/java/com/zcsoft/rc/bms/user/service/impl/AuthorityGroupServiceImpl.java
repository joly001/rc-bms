package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.core.util.StringUtils;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.user.entity.AuthoritiesAllRsp;
import com.zcsoft.rc.bms.api.user.entity.OrganizationAllRsp;
import com.zcsoft.rc.bms.app.constants.Constants;
import com.zcsoft.rc.bms.user.service.AuthorityGroupService;
import com.zcsoft.rc.bms.user.service.AuthorityService;
import com.zcsoft.rc.user.dao.AuthorityGroupDAO;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.AuthorityGroup;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

@Service
public class AuthorityGroupServiceImpl extends BaseServiceImpl<AuthorityGroup, java.lang.String> implements AuthorityGroupService {
	
	private AuthorityGroupDAO authorityGroupDAO;

	private AuthorityService authorityService;

	@Resource
	public void setAuthorityGroupDAO(AuthorityGroupDAO authorityGroupDAO) {
		super.setBaseDAO(authorityGroupDAO);
		this.authorityGroupDAO = authorityGroupDAO;
	}
	@Resource
	public void setAuthorityService(AuthorityService authorityService) {
		this.authorityService = authorityService;
	}

	@Override
	public List<Authority> getAuthorityByAuthorityGroup(String authorityGroupId) {
		return authorityService.getByAuthorityGroupId(authorityGroupId);
	}

	protected void sortAuthorities(Map<AuthoritiesAllRsp,List<AuthoritiesAllRsp>> authoritiesMap, AuthoritiesAllRsp rootAuthoritiesAllRsp, List<AuthoritiesAllRsp> rootAuthoritiesAllRspList){
		Collections.sort(rootAuthoritiesAllRspList, new Comparator<AuthoritiesAllRsp>(){
			public int compare(AuthoritiesAllRsp a, AuthoritiesAllRsp b) {
				return a.getSequenceNumber()-b.getSequenceNumber();
			}
		});

		rootAuthoritiesAllRspList.forEach(authoritiesAllRsp ->{
			List<AuthoritiesAllRsp> childs = authoritiesMap.get(authoritiesAllRsp);
			if(null != childs){
				sortAuthorities(authoritiesMap, authoritiesAllRsp, childs);
			}
			rootAuthoritiesAllRsp.getAuthorities().add(authoritiesAllRsp);
		});
	}

	@Override
	public AuthoritiesAllRsp authorities() {
		AuthoritiesAllRsp rootAuthoritiesAllRsp = new AuthoritiesAllRsp();
		rootAuthoritiesAllRsp.setId(Constants.ROOT_KEY);
		rootAuthoritiesAllRsp.setName(Constants.ROOT_KEY);
		rootAuthoritiesAllRsp.setSequenceNumber(0);
		rootAuthoritiesAllRsp.setAuthorities(new ArrayList<>());

		List<AuthorityGroup> authorityGroupList = authorityGroupDAO.queryAll();

		if(authorityGroupList == null || authorityGroupList.isEmpty()) {
			return rootAuthoritiesAllRsp;
		}

		Map<String, AuthoritiesAllRsp> authoritiesAllRspMap = new HashMap<>();
		authorityGroupList.forEach(authorityGroup -> {
			AuthoritiesAllRsp authoritiesAllRsp = authorityGroup.convertToAuthoritiesAllRsp();

			authoritiesAllRspMap.put(authorityGroup.getId(), authoritiesAllRsp);
		});

		Map<AuthoritiesAllRsp,List<AuthoritiesAllRsp>> authoritiesMap = new HashMap<>();

		authorityGroupList.forEach(authorityGroup -> {
			AuthoritiesAllRsp authoritiesAllRsp = authorityGroup.convertToAuthoritiesAllRsp();

			AuthoritiesAllRsp parentAuthoritiesAllRsp;
			if(StringUtils.isTrimEmpty(authorityGroup.getParentId())) {
				parentAuthoritiesAllRsp = rootAuthoritiesAllRsp;
			} else {
				parentAuthoritiesAllRsp = authoritiesAllRspMap.get(authorityGroup.getParentId());
			}

			List<AuthoritiesAllRsp> childAuthoritiesAllRspList = authoritiesMap.get(parentAuthoritiesAllRsp);

			if(childAuthoritiesAllRspList == null) {
				childAuthoritiesAllRspList = new ArrayList<>();
				childAuthoritiesAllRspList.add(authoritiesAllRsp);

				authoritiesMap.put(parentAuthoritiesAllRsp, childAuthoritiesAllRspList);
			} else {
				childAuthoritiesAllRspList.add(authoritiesAllRsp);
			}

		});

		sortAuthorities(authoritiesMap, rootAuthoritiesAllRsp, authoritiesMap.get(rootAuthoritiesAllRsp));

		return rootAuthoritiesAllRsp;
	}
}
