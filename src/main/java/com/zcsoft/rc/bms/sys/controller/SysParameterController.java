package com.zcsoft.rc.bms.sys.controller;


import com.zcsoft.rc.bms.api.sys.entity.SysParameterAllRsp;
import com.zcsoft.rc.bms.api.sys.entity.SysParameterUpdateReq;
import com.zcsoft.rc.bms.sys.service.SysParameterService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;


@Controller
@RequestMapping(value="sysParameter")
public class SysParameterController {
	
	private SysParameterService sysParameterService;

	@Resource
	public void setSysParameterService(SysParameterService sysParameterService) {
		this.sysParameterService = sysParameterService;
	}

	/**
	 * 参数查询所有
	 */
	@RequestMapping(value="all", method= RequestMethod.POST)
	public SysParameterAllRsp all() {
		return sysParameterService.all();
	}

	/**
	 * 参数修改
	 */
	@RequestMapping(value="update", method= RequestMethod.POST)
	public void update(SysParameterUpdateReq req) {
		sysParameterService.update(req);
	}
	
}
