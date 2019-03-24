package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.user.entity.*;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.user.service.OrganizationService;
import com.zcsoft.rc.bms.user.service.UserService;
import com.zcsoft.rc.user.dao.OrganizationDAO;
import com.zcsoft.rc.user.model.entity.Organization;
import com.zcsoft.rc.user.model.entity.User;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class OrganizationServiceImpl extends BaseServiceImpl<Organization, java.lang.String> implements OrganizationService {
	
	private OrganizationDAO organizationDAO;

	private UserService userService;

	@Resource
	public void setOrganizationDAO(OrganizationDAO organizationDAO) {
		super.setBaseDAO(organizationDAO);
		this.organizationDAO = organizationDAO;
	}
	@Resource
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	protected int getMaxSequenceNumber(String parentId) {
		Integer maxSequenceNumber = organizationDAO.queryMaxSequenceNumber(parentId);

		if(maxSequenceNumber == null) {
			return 0;
		} else {
			return maxSequenceNumber+1;
		}
	}

	protected void verifyOrgNameExistence (String orgName) {
		Organization queryOrganization = new Organization();
		queryOrganization.setOrgName(orgName);
		queryOrganization = organizationDAO.query(queryOrganization);
		if(queryOrganization != null) {
			throw new ValidationCubeException(ErrorConstants.ORGANIZATION_ALREADY_EXIST);
		}
	}

	@Override
	public OrganizationAddRsp add(OrganizationAddReq req) {

		verifyOrgNameExistence(req.getOrgName());

		Integer maxSequenceNumber = getMaxSequenceNumber(req.getParentId());

		Organization organization = new Organization();
		BeanUtils.copyProperties(req, organization);
		if(organization.getSequenceNumber() == null) {
			organization.setSequenceNumber(maxSequenceNumber);
		}

		organizationDAO.insert(organization);

		OrganizationAddRsp organizationAddRsp = new OrganizationAddRsp();
		organizationAddRsp.setId(organization.getId());

		return organizationAddRsp;
	}

	@Override
	public OrganizationDeleteRsp delete(OrganizationDeleteReq req) {
		Organization queryOrganization = new Organization();
		queryOrganization.setParentId(req.getId());

		List<Organization> organizationList = organizationDAO.queryList(queryOrganization);
		if(!organizationList.isEmpty()) {
			throw new ValidationCubeException(ErrorConstants.ORGANIZATION_HAS_CHILD_ORGANIZATION);
		}

		List<User> userList = userService.getByOrganizationId(req.getId());
		if(!userList.isEmpty()) {
			throw new ValidationCubeException(ErrorConstants.ORGANIZATION_HAS_CHILD_USER);
		}

		int number = organizationDAO.deleteById(req.getId());
		if(number == 0) {
			throw new ValidationCubeException(ErrorConstants.ORGANIZATION_NOT_EXIST);
		}

		OrganizationDeleteRsp rsp = new OrganizationDeleteRsp();
		rsp.setId(req.getId());

		return rsp;
	}

	@Override
	public OrganizationUpdateRsp update(OrganizationUpdateReq req) {
		verifyOrgNameExistence(req.getOrgName());

		Organization organization = new Organization();
		BeanUtils.copyProperties(req, organization);

		organizationDAO.updateById(organization);

		OrganizationUpdateRsp organizationUpdateRsp = new OrganizationUpdateRsp();
		organizationUpdateRsp.setId(organization.getId());

		return organizationUpdateRsp;
	}
}
