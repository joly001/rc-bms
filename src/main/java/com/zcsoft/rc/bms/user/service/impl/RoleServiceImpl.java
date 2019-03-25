package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.user.entity.AuthoritiesAllRsp;
import com.zcsoft.rc.bms.api.user.entity.RoleAddReq;
import com.zcsoft.rc.bms.api.user.entity.RoleAddRsp;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.user.service.RoleAuthorityService;
import com.zcsoft.rc.bms.user.service.RoleService;
import com.zcsoft.rc.user.dao.RoleDAO;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.Role;
import com.zcsoft.rc.user.model.entity.RoleAuthority;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RoleServiceImpl extends BaseServiceImpl<Role, java.lang.String> implements RoleService {
	
	private RoleDAO roleDAO;

	private RoleAuthorityService roleAuthorityService;

	@Resource
	public void setRoleDAO(RoleDAO roleDAO) {
		super.setBaseDAO(roleDAO);
		this.roleDAO = roleDAO;
	}
	@Resource
	public void setRoleAuthorityService(RoleAuthorityService roleAuthorityService) {
		this.roleAuthorityService = roleAuthorityService;
	}

	@Override
	public List<Authority> getAuthorityByRoleId(String roleId) {
		return roleAuthorityService.getAuthorityByRoleId(roleId);
	}

	@Override
	public AuthoritiesAllRsp authorities() {
		return roleAuthorityService.getAuthorityGroupService().authorities();
	}

	protected void verifyRoleNameExistence (String roleName) {
		Role role = new Role();
		role.setRoleName(roleName);

		role = roleDAO.query(role);

		if(role == null) {
			throw new ValidationCubeException(ErrorConstants.ROLE_ALREADY_EXIST);
		}
	}

	@Transactional
	protected void add(Role role, List<String> authorities) {
		roleDAO.insert(role);
		authorities.forEach(authority -> {
			RoleAuthority roleAuthority = new RoleAuthority();
			roleAuthority.setRoleCode(role.getId());
			roleAuthority.setAuthorityCode(authority);
			roleAuthorityService.add(roleAuthority);
		});
	}

	@Override
	public RoleAddRsp add(RoleAddReq req) {
		verifyRoleNameExistence(req.getRoleName());

		Role role = new Role();
		BeanUtils.copyProperties(req, role);
		role.setRoleType(Role.ROLE_TYPE_CUSTOM);

		add(role, req.getAuthorities());

		RoleAddRsp roleAddRsp = new RoleAddRsp();
		roleAddRsp.setId(role.getId());

		return roleAddRsp;
	}
}
