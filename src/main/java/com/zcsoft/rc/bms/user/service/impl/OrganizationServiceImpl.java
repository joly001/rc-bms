package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.user.entity.OrganizationAddReq;
import com.zcsoft.rc.bms.api.user.entity.OrganizationAddRsp;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.user.service.OrganizationService;
import com.zcsoft.rc.user.dao.OrganizationDAO;
import com.zcsoft.rc.user.model.entity.Organization;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class OrganizationServiceImpl extends BaseServiceImpl<Organization, java.lang.String> implements OrganizationService {
	
	private OrganizationDAO organizationDAO;

	@Resource
	public void setOrganizationDAO(OrganizationDAO organizationDAO) {
		super.setBaseDAO(organizationDAO);
		this.organizationDAO = organizationDAO;
	}

	protected int getMaxSequenceNumber(String parentId) {
		Integer maxSequenceNumber = organizationDAO.queryMaxSequenceNumber(parentId);

		if(maxSequenceNumber == null) {
			return 0;
		} else {
			return maxSequenceNumber+1;
		}
	}

	@Override
	public OrganizationAddRsp add(OrganizationAddReq req) {

		Organization queryOrganization = new Organization();
		queryOrganization.setOrgName(req.getOrgName());
		queryOrganization = organizationDAO.query(queryOrganization);
		if(queryOrganization != null) {
			throw new ValidationCubeException(ErrorConstants.ORGANIZATION_ALREADY_EXIST);
		}

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
}
