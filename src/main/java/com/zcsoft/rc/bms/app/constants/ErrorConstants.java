package com.zcsoft.rc.bms.app.constants;

import com.zcsoft.rc.mileage.model.entity.Mileage;

public interface ErrorConstants {

    /**
     * 机构名称已经存在
     */
    String ORGANIZATION_ALREADY_EXIST = "001000";
    /**
     * 该组织结构存在下级组织，不能删除
     */
    String ORGANIZATION_HAS_CHILD_ORGANIZATION = "001001";
    /**
     * 该组织结构下存在人员信息，不能删除
     */
    String ORGANIZATION_HAS_CHILD_USER = "001002";
    /**
     * 该组织结构不存在
     */
    String ORGANIZATION_NOT_EXIST = "001003";

    /**
     * 用户没有权限
     */
    String ROLE_HAS_NOT_ENOUGH_RIGHTS = "002000";
    /**
     * 角色名称已经存在
     */
    String ROLE_ALREADY_EXIST = "002001";
    /**
     * 角色不存在
     */
    String ROLE_NOT_EXIST = "002002";
    /**
     * 系统角色不能删除
     */
    String ROLE_DEFAULT_TYPE_NOT_DELETE = "002003";
    /**
     * 角色已被用户使用不能删除
     */
    String ROLE_HAS_USER = "002004";
    /**
     * 系统角色不能修改
     */
    String ROLE_DEFAULT_TYPE_NOT_UPDATE = "002005";

    /**
     * 用户名或密码错误
     */
    String USER_INCORRECT_USERNAME_OR_PASSWORD = "003000";
    /**
     * 该手机号码已存在
     */
    String USER_MOBILE_ALREADY_EXIST = "003001";
    /**
     * 该手环编号已存在
     */
    String USER_WRISTSTRAPCODE_ALREADY_EXIST = "003002";
    /**
     * 手机格式错误
     */
    String USER_MOBILE_FORMAT_ERROR = "003003";
    /**
     * 用户不存在
     */
    String USER_NOT_EXIST = "003004";

    /**
     * 已存在该里程标，请重新填写
     */
    String MILEAGE_ALREADY_EXIST = "004000";
    /**
     * 里程标经度不相等
     */
    String MILEAGE_LONGITUDE_NOT_EQUALS = "004001";
    /**
     * 里程标存在里程区间，不能删除
     */
    String MILEAGE_HAS_MILEAGE_SEGMENT_CAN_NOT_DELETE = "004002";
    /**
     * 里程不存在
     */
    String MILEAGE_NOT_EXIST = "004003";

    /**
     * 里程区间名称不能重复，请重新填写
     */
    String MILEAGESEGMENT_ALREADY_EXIST = "005000";
    /**
     * 里程区间不存在
     */
    String MILEAGESEGMENT_NOT_EXIST = "005001";

}