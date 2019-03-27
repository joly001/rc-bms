package com.zcsoft.rc.bms.user.controller;


import com.sharingif.cube.core.handler.chain.BHMChain;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.user.entity.*;
import com.zcsoft.rc.bms.user.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.validation.Valid;


@Controller
@RequestMapping(value="user")
public class UserController {
	
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}
	@Resource
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	/**
	 * 用户登录
	 */
	@BHMChain(ref = "loginChain")
	@RequestMapping(value="login", method= RequestMethod.POST)
	public UserLoginRsp login(@Valid UserLoginReq req){
		return userService.login(req);
	}

	/**
	 * 用户安全退出
	 */
	@BHMChain(ref="signOutChain")
	@RequestMapping(value="signOut", method= RequestMethod.POST)
	public void signOut() {

	}

	/**
	 * 用户添加
	 */
	@RequestMapping(value="add", method= RequestMethod.POST)
	public UserAddRsp add(@Valid UserAddReq req) {
		return userService.add(req);
	}

	/**
	 * 用户删除
	 */
	@RequestMapping(value="delete", method= RequestMethod.POST)
	public UserDeleteRsp delete(@Valid UserDeleteReq req) {
		return userService.delete(req);
	}

	/**
	 * 用户修改
	 */
	@RequestMapping(value="update", method= RequestMethod.POST)
	public UserUpdateRsp update(UserUpdateReq req) {
		return userService.update(req);
	}

	/**
	 * 用户分页查询
	 * @param req
	 * @return
	 */
	public HttpPaginationRepertory<UserListRsp> list(HttpPaginationCondition<UserListReq> req) {
		return userService.list(req);
	}

}
