package com.zcsoft.rc.bms.railway.controller;

import com.zcsoft.rc.bms.api.railway.entity.*;
import com.zcsoft.rc.bms.railway.service.SafetyZoneService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;

@Controller
@RequestMapping(value="safetyZone")
public class SafetyZoneController {

    private SafetyZoneService safetyZoneService;

    @Resource
    public void setSafetyZoneService(SafetyZoneService safetyZoneService) {
        this.safetyZoneService = safetyZoneService;
    }

    /**
     * 安全区域添加
     * @param req
     * @return
     */
    @RequestMapping(value="add", method= RequestMethod.POST)
    public SafetyZoneAddRsp add(SafetyZoneAddReq req) {
        return safetyZoneService.add(req);
    }

    /**
     * 安全区域删除
     * @param req
     * @return
     */
    @RequestMapping(value="delete", method= RequestMethod.POST)
    public SafetyZoneDeleteRsp delete(SafetyZoneDeleteReq req) {
        return safetyZoneService.delete(req);
    }

    /**
     * 安全区域删除所有
     * @return
     */
    @RequestMapping(value="deleteAll", method= RequestMethod.POST)
    public void deleteAll() {
        safetyZoneService.deleteAll();
    }

    /**
     * 安全区域列表查询
     * @return
     */
    @RequestMapping(value="list", method= RequestMethod.POST)
    public SafetyZoneListRsp list() {
        return safetyZoneService.list();
    }

}
