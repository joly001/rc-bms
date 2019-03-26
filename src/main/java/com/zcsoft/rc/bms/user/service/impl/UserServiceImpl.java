package com.zcsoft.rc.bms.user.service.impl;


import com.sharingif.cube.core.exception.validation.ValidationCubeException;
import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.user.entity.*;
import com.zcsoft.rc.bms.app.constants.Constants;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.bms.user.service.OrganizationService;
import com.zcsoft.rc.bms.user.service.UserRoleService;
import com.zcsoft.rc.bms.user.service.UserService;
import com.zcsoft.rc.user.dao.UserDAO;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.Organization;
import com.zcsoft.rc.user.model.entity.User;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserServiceImpl extends BaseServiceImpl<User, java.lang.String> implements UserService {
	
	private UserDAO userDAO;

	private UserRoleService userRoleService;
	private OrganizationService organizationService;

	@Resource
	public void setUserDAO(UserDAO userDAO) {
		super.setBaseDAO(userDAO);
		this.userDAO = userDAO;
	}

	@Resource
	public void setUserRoleService(UserRoleService userRoleService) {
		this.userRoleService = userRoleService;
	}
	@Resource
	public void setOrganizationService(OrganizationService organizationService) {
		this.organizationService = organizationService;
	}

	@Override
	public User getByUsername(String username) {
		User user = new User();
		user.setUsername(username);

		return userDAO.query(user);
	}

	@Override
	public List<Authority> getAuthoritiesByUserId(String userId) {
		return userRoleService.getAuthorityByUserId(userId);
	}

	@Override
	public List<User> getByOrganizationId(String organizationId) {
		User user = new User();
		user.setOrganizationId(organizationId);

		return userDAO.queryList(user);
	}

	@Override
	public UserLoginRsp login(UserLoginReq req) {
		UserLoginRsp userLoginRsp = new UserLoginRsp();
		userLoginRsp.setUsername(req.getUsername());
		return userLoginRsp;
	}

	protected void verifyIdExistence(User user) {
		if(user == null) {
			throw new ValidationCubeException(ErrorConstants.USER_NOT_EXIST);
		}
	}

	protected void verifyMobileExistence(String id, String mobile) {
		User user = new User();
		user.setMobile(mobile);

		user = userDAO.query(user);

		if(user == null) {
			return;
		}

		if(user.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.USER_MOBILE_ALREADY_EXIST);
	}

	protected void verifyWristStrapCodeExistence(String id, String wristStrapCode) {
		User user = new User();
		user.setWristStrapCode(wristStrapCode);

		user = userDAO.query(user);

		if(user == null) {
			return;
		}

		if(user.getId().equals(id)) {
			return;
		}

		throw new ValidationCubeException(ErrorConstants.USER_WRISTSTRAPCODE_ALREADY_EXIST);
	}

	@Override
	public UserAddRsp add(UserAddReq req) {

		verifyMobileExistence(null, req.getMobile());

		verifyWristStrapCodeExistence(null, req.getWristStrapCode());

		organizationService.verifyIdExistence(req.getOrganizationId());


		User user = new User();
		BeanUtils.copyProperties(req, user);
		user.setUsername(req.getMobile());
		user.setPassword(Constants.DEFULT_PASSWORD);
		user.setMobilePrefix(Constants.CHINA_MOBILE_PREFIX);
		user.setUserType(req.getBuilderUserType());
		user.setAdmissionDate(req.getAdmissionLeaveDate());
		user.setStatus(User.STATUS_NORMAL);

		userDAO.insert(user);

		UserAddRsp rsp = new UserAddRsp();
		rsp.setId(user.getId());

		return rsp;
	}

	@Override
	public UserDeleteRsp delete(UserDeleteReq req) {
		User user = userDAO.queryById(req.getId());
		verifyIdExistence(user);

		userDAO.deleteById(req.getId());

		UserDeleteRsp rsp = new UserDeleteRsp();
		rsp.setId(user.getId());

		return rsp;
	}

	@Override
	public UserUpdateRsp update(UserUpdateReq req) {
		User user = userDAO.queryById(req.getId());
		verifyIdExistence(user);

		verifyMobileExistence(req.id, req.getMobile());

		verifyWristStrapCodeExistence(req.id, req.getWristStrapCode());

		organizationService.verifyIdExistence(req.getOrganizationId());

		user = new User();
		BeanUtils.copyProperties(req, user);
		userDAO.updateById(user);

		UserUpdateRsp rsp = new UserUpdateRsp();
		rsp.setId(user.getId());

		return rsp;
	}
}
