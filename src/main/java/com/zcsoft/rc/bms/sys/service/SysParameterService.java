package com.zcsoft.rc.bms.sys.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.sys.entity.SysParameterAllRsp;
import com.zcsoft.rc.bms.api.sys.entity.SysParameterUpdateReq;
import com.zcsoft.rc.sys.model.entity.SysParameter;


public interface SysParameterService extends IBaseService<SysParameter, java.lang.String> {

    /**
     * 参数查询所有
     * @return
     */
    SysParameterAllRsp all();

    /**
     * 参数修改
     * @param req
     */
    void update(SysParameterUpdateReq req);
	
}
