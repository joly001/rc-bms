package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.persistence.database.pagination.PaginationCondition;
import com.sharingif.cube.persistence.database.pagination.PaginationRepertory;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.user.entity.*;
import com.zcsoft.rc.bms.app.constants.Constants;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.user.service.RoleAuthorityService;
import com.zcsoft.rc.bms.user.service.RoleService;
import com.zcsoft.rc.bms.user.service.UserRoleService;
import com.zcsoft.rc.user.dao.RoleDAO;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.Role;
import com.zcsoft.rc.user.model.entity.RoleAuthority;
import com.zcsoft.rc.user.model.entity.UserRole;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class RoleServiceImpl extends BaseServiceImpl<Role, java.lang.String> implements RoleService {
	
	private RoleDAO roleDAO;

	private RoleAuthorityService roleAuthorityService;
	private UserRoleService userRoleService;

	@Resource
	public void setRoleDAO(RoleDAO roleDAO) {
		super.setBaseDAO(roleDAO);
		this.roleDAO = roleDAO;
	}
	@Resource
	public void setRoleAuthorityService(RoleAuthorityService roleAuthorityService) {
		this.roleAuthorityService = roleAuthorityService;
	}
	@Resource
	public void setUserRoleService(UserRoleService userRoleService) {
		this.userRoleService = userRoleService;
	}

	@Override
	public List<Authority> getAuthorityByRoleId(String roleId) {
		return roleAuthorityService.getAuthorityByRoleId(roleId);
	}

	@Override
	public AuthoritiesAllRsp authorities() {
		return roleAuthorityService.getAuthorityGroupService().authorities();
	}

	protected void verifyRoleNameExistence(String id, String roleName) {
		Role role = new Role();
		role.setRoleName(roleName);

		role = roleDAO.query(role);

		if(role == null) {
			return;
		}

		if(role.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.ROLE_ALREADY_EXIST);
	}

	@Transactional
	protected void add(Role role, List<String> authorities) {
		roleDAO.insert(role);

		if(authorities == null) {
			return;
		}

		authorities.forEach(authority -> {
			RoleAuthority roleAuthority = new RoleAuthority();
			roleAuthority.setRoleCode(role.getId());
			roleAuthority.setAuthorityCode(authority);
			roleAuthorityService.add(roleAuthority);
		});
	}

	@Override
	public RoleAddRsp add(RoleAddReq req) {
		verifyRoleNameExistence(null, req.getRoleName());

		Role role = new Role();
		BeanUtils.copyProperties(req, role);
		role.setRoleType(Role.ROLE_TYPE_CUSTOM);

		add(role, req.getAuthorities());

		RoleAddRsp roleAddRsp = new RoleAddRsp();
		roleAddRsp.setId(role.getId());

		return roleAddRsp;
	}


	@Transactional
	protected void delete(String roleId) {
		roleAuthorityService.deleteByRoleId(roleId);
		roleDAO.deleteById(roleId);
	}

	protected void verifyRoleIdExistence(Role role) {
		if(role == null) {
			throw new ValidationCubeException(ErrorConstants.ROLE_NOT_EXIST);
		}
	}

	@Override
	public RoleDeleteRsp delete(RoleDeleteReq req) {
		Role role = roleDAO.queryById(req.getId());
		verifyRoleIdExistence(role);

		if(Role.ROLE_TYPE_DEFAULT.equals(role.getRoleType())) {
			throw new ValidationCubeException(ErrorConstants.ROLE_DEFAULT_TYPE_NOT_DELETE);
		}

		List<UserRole> userRoleList = userRoleService.getByRoleId(role.getId());
		if(!userRoleList.isEmpty()) {
			throw new ValidationCubeException(ErrorConstants.ROLE_HAS_USER);
		}

		delete(role.getId());

		RoleDeleteRsp rsp = new RoleDeleteRsp();
		rsp.setId(role.getId());

		return rsp;
	}

	@Transactional
	protected void update(Role role, List<String> authorities) {
		roleDAO.updateById(role);
		roleAuthorityService.deleteByRoleId(role.getId());

		if(authorities == null) {
			return;
		}

		authorities.forEach(authority -> {
			RoleAuthority roleAuthority = new RoleAuthority();
			roleAuthority.setRoleCode(role.getId());
			roleAuthority.setAuthorityCode(authority);
			roleAuthorityService.add(roleAuthority);
		});
	}

	@Override
	public RoleUpdateRsp update(RoleUpdateReq req) {
		Role queryRole = roleDAO.queryById(req.getId());
		verifyRoleIdExistence(queryRole);

		if(Role.ROLE_TYPE_DEFAULT.equals(queryRole.getRoleType())) {
			throw new ValidationCubeException(ErrorConstants.ROLE_DEFAULT_TYPE_NOT_UPDATE);
		}

		verifyRoleNameExistence(req.getId(), req.getRoleName());

		Role role = new Role();
		BeanUtils.copyProperties(req, role);

		update(role, req.getAuthorities());

		RoleUpdateRsp rsp = new RoleUpdateRsp();
		rsp.setId(role.getId());

		return rsp;
	}

	@Override
	public HttpPaginationRepertory<RoleListRsp> list(HttpPaginationCondition<RoleListReq> req) {
		Role queryRole = new Role();
		if(req.getCondition() != null) {
			queryRole.setRoleName(req.getCondition().getRoleName());
		}
		PaginationCondition<Role> paginationCondition = new PaginationCondition<>();
		paginationCondition.setCondition(queryRole);
		paginationCondition.setCurrentPage(req.getCurrentPage());
		paginationCondition.setPageSize(Constants.PAGE_SIZE);


		PaginationRepertory<Role> paginationRepertory = roleDAO.queryPagination(paginationCondition);

		HttpPaginationRepertory<RoleListRsp> httpPaginationRepertory = new HttpPaginationRepertory<>(
				paginationRepertory.getTotalCount()
				,null
				,req
		);

		if(paginationRepertory.getPageItems() == null || paginationRepertory.getPageItems().isEmpty()) {
			return httpPaginationRepertory;
		}

		List<RoleListRsp> roleListRspList = new ArrayList<>(paginationRepertory.getPageItems().size());
		paginationRepertory.getPageItems().forEach(role -> {
			RoleListRsp roleListRsp = new RoleListRsp();
			BeanUtils.copyProperties(role, roleListRsp);

			roleListRspList.add(roleListRsp);
		});
		httpPaginationRepertory.setPageItems(roleListRspList);

		return httpPaginationRepertory;
	}
}
