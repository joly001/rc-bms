package com.zcsoft.rc.bms.railway.dao;

import org.bson.Document;

import java.util.List;

public interface SafetyZoneDAO {

    /**
     * 安全区域添加
     * @param safetyZone
     * @return
     */
    String add(List<List<List<Double>>> safetyZone);

    /**
     * 安全区域删除
     * @param id
     * @return
     */
    void delete(String id);

    /**
     * 安全区域删除所有
     */
    void deleteAll();

    /**
     * 安全区域列表查询
     * @return
     */
    List<Document> list();

}
