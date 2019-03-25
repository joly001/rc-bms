package com.zcsoft.rc.bms.app.constants;

public class ErrorConstants {

    /**
     * 机构名称已经存在
     */
    public static final String ORGANIZATION_ALREADY_EXIST = "001000";
    /**
     * 该组织结构存在下级组织，不能删除
     */
    public static final String ORGANIZATION_HAS_CHILD_ORGANIZATION = "001001";
    /**
     * 该组织结构下存在人员信息，不能删除
     */
    public static final String ORGANIZATION_HAS_CHILD_USER = "001002";
    /**
     * 该组织结不存在不能删除
     */
    public static final String ORGANIZATION_NOT_EXIST = "001003";

    /**
     * 用户没有权限
     */
    public static final String ROLE_HAS_NOT_ENOUGH_RIGHTS = "002000";



}
