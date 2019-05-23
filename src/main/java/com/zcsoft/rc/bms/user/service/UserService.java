package com.zcsoft.rc.bms.user.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.http.HttpPaginationCondition;
import com.zcsoft.rc.bms.api.http.HttpPaginationRepertory;
import com.zcsoft.rc.bms.api.user.entity.*;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.Locale;


public interface UserService extends IBaseService<User, java.lang.String> {

    /**
     * 转换职位
     * @param builderUserType
     * @return
     */
    String convertBuilderUserType(String builderUserType);
    /**
     * 根据用户名查询用户
     * @param username
     * @return
     */
    User getByUsername(String username);

    /**
     * 根据用户id查询权限
     * @param userId
     * @return
     */
    List<Authority> getAuthoritiesByUserId(String userId);

    /**
     * 根据组织id查询用户列表
     * @param organizationId
     * @return
     */
    List<User> getByOrganizationId(String organizationId);

    /**
     * 验证userId是否存在
     * @param userId
     * @return
     */
    User verifyIdExistence(String userId);

    /**
     * 用户登录
     * @param req
     * @return
     */
    UserLoginRsp login(UserLoginReq req);

    /**
     * 用户权限
     * @param user
     * @return
     */
    UserAuthoritiesRsp userAuthorities(User user);

    /**
     * 用户添加
     * @param req
     * @return
     */
    UserAddRsp add(UserAddReq req);

    /**
     * 用户删除
     * @param req
     * @return
     */
    UserDeleteRsp delete(UserDeleteReq req);

    /**
     * 用户修改
     * @param req
     * @return
     */
    UserUpdateRsp update(UserUpdateReq req);

    /**
     * 用户分页查询
     * @param req
     * @return
     */
    HttpPaginationRepertory<UserListRsp> list(HttpPaginationCondition<UserListReq> req);

    /**
     * 用户详情
     * @param req
     * @return
     */
    UserDetailsRsp details(UserDetailsReq req);


}
