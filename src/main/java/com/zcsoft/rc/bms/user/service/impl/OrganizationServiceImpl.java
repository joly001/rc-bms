package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.core.util.StringUtils;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.user.entity.*;
import com.zcsoft.rc.bms.app.constants.Constants;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.user.service.OrganizationService;
import com.zcsoft.rc.bms.user.service.UserService;
import com.zcsoft.rc.user.dao.OrganizationDAO;
import com.zcsoft.rc.user.model.entity.Organization;
import com.zcsoft.rc.user.model.entity.User;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.*;

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

	protected void verifyOrgNameExistence(String id, String parentId, String orgName) {
		Organization queryOrganization = organizationDAO.queryByOrgNameParentId(orgName, parentId);

		if(queryOrganization == null) {
			return;
		}

		if(queryOrganization.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.ORGANIZATION_ALREADY_EXIST);
	}

	@Override
	public void verifyIdExistence(String id) {
		Organization organization = organizationDAO.queryById(id);

		verifyOrgIdExistence(organization);
	}

	@Override
	public OrganizationAddRsp add(OrganizationAddReq req) {

		verifyOrgNameExistence(null, req.getParentId(), req.getOrgName());

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

	@Transactional
	protected void delete(Organization organization) {
		organizationDAO.deleteById(organization.getId());
		organizationDAO.updateDecrementSequenceNumberByParentIdSequenceNumber(organization.getParentId(), organization.getSequenceNumber());
	}

	protected void verifyOrgIdExistence(Organization organization) {
		if(organization == null) {
			throw new ValidationCubeException(ErrorConstants.ORGANIZATION_NOT_EXIST);
		}
	}

	@Override
	public OrganizationDeleteRsp delete(OrganizationDeleteReq req) {
		Organization organization = organizationDAO.queryById(req.getId());
		verifyOrgIdExistence(organization);

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

		delete(organization);

		OrganizationDeleteRsp rsp = new OrganizationDeleteRsp();
		rsp.setId(req.getId());

		return rsp;
	}

	@Override
	public OrganizationUpdateRsp update(OrganizationUpdateReq req) {
		Organization queryOrganization = organizationDAO.queryById(req.getId());
		verifyOrgIdExistence(queryOrganization);

		verifyOrgNameExistence(req.getId(), queryOrganization.getParentId(), req.getOrgName());

		Organization organization = new Organization();
		BeanUtils.copyProperties(req, organization);

		organizationDAO.updateById(organization);

		OrganizationUpdateRsp organizationUpdateRsp = new OrganizationUpdateRsp();
		organizationUpdateRsp.setId(organization.getId());

		return organizationUpdateRsp;
	}

	protected void sortOrganization(Map<OrganizationAllRsp,List<OrganizationAllRsp>> organizationMap, OrganizationAllRsp rootOrganizationAllRsp, List<OrganizationAllRsp> rootOrganizationAllRspList){
		Collections.sort(rootOrganizationAllRspList, new Comparator<OrganizationAllRsp>(){
			public int compare(OrganizationAllRsp a, OrganizationAllRsp b) {
				return a.getSequenceNumber()-b.getSequenceNumber();
			}
		});

		rootOrganizationAllRspList.forEach(organizationAllRsp ->{
			List<OrganizationAllRsp> childs = organizationMap.get(organizationAllRsp);
			if(null != childs){
				sortOrganization(organizationMap, organizationAllRsp, childs);
			}
			rootOrganizationAllRsp.getChildOrgList().add(organizationAllRsp);
		});
	}

	@Override
	public OrganizationAllRsp all() {
		OrganizationAllRsp rootOrganizationAllRsp = new OrganizationAllRsp();
		rootOrganizationAllRsp.setId(Constants.ROOT_KEY);
		rootOrganizationAllRsp.setOrgName(Constants.ROOT_KEY);
		rootOrganizationAllRsp.setSequenceNumber(0);
		rootOrganizationAllRsp.setChildOrgList(new ArrayList<>());


		List<Organization> organizationList = organizationDAO.queryAll();

		if(organizationList == null || organizationList.isEmpty()) {
			return rootOrganizationAllRsp;
		}

		Map<String, OrganizationAllRsp> organizationAllRspMap = new HashMap<>();
		organizationList.forEach(organization -> {
			OrganizationAllRsp organizationAllRsp = new OrganizationAllRsp();
			BeanUtils.copyProperties(organization, organizationAllRsp);
			organizationAllRsp.setChildOrgList(new ArrayList<>());
			organizationAllRspMap.put(organization.getId(), organizationAllRsp);
		});

		Map<OrganizationAllRsp,List<OrganizationAllRsp>> organizationMap = new HashMap<>();

		organizationList.forEach(organization -> {
			OrganizationAllRsp organizationAllRsp = new OrganizationAllRsp();
			BeanUtils.copyProperties(organization, organizationAllRsp);
			organizationAllRsp.setChildOrgList(new ArrayList<>());

			OrganizationAllRsp parentOrganizationAllRsp;
			if(StringUtils.isTrimEmpty(organization.getParentId())) {
				parentOrganizationAllRsp = rootOrganizationAllRsp;
			} else {
				parentOrganizationAllRsp = organizationAllRspMap.get(organization.getParentId());
			}

			List<OrganizationAllRsp> childOrganizationAllRspList = organizationMap.get(parentOrganizationAllRsp);

			if(childOrganizationAllRspList == null) {
				childOrganizationAllRspList = new ArrayList<>();
				childOrganizationAllRspList.add(organizationAllRsp);

				organizationMap.put(parentOrganizationAllRsp, childOrganizationAllRspList);
			} else {
				childOrganizationAllRspList.add(organizationAllRsp);
			}

		});


		sortOrganization(organizationMap, rootOrganizationAllRsp, organizationMap.get(rootOrganizationAllRsp));

		return rootOrganizationAllRsp;
	}
}
