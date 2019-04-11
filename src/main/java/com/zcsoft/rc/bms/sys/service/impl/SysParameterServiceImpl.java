package com.zcsoft.rc.bms.sys.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.api.sys.entity.SysParameterAllRsp;
import com.zcsoft.rc.bms.api.sys.entity.SysParameterReq;
import com.zcsoft.rc.bms.api.sys.entity.SysParameterRsp;
import com.zcsoft.rc.bms.api.sys.entity.SysParameterUpdateReq;
import com.zcsoft.rc.bms.sys.service.SysParameterService;
import com.zcsoft.rc.sys.dao.SysParameterDAO;
import com.zcsoft.rc.sys.model.entity.SysParameter;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class SysParameterServiceImpl extends BaseServiceImpl<SysParameter, java.lang.String> implements SysParameterService {
	
	private SysParameterDAO sysParameterDAO;

	@Resource
	public void setSysParameterDAO(SysParameterDAO sysParameterDAO) {
		super.setBaseDAO(sysParameterDAO);
		this.sysParameterDAO = sysParameterDAO;
	}


	@Override
	public SysParameterAllRsp all() {
		List<SysParameter> sysParameterList = sysParameterDAO.queryAll();

		SysParameterAllRsp rsp = new SysParameterAllRsp();

		if(sysParameterList == null || sysParameterList.isEmpty()) {
			return rsp;
		}

		List<SysParameterRsp> sysParameterRspList = new ArrayList<>();
		rsp.setList(sysParameterRspList);
		sysParameterList.forEach(sysParameter -> {
			SysParameterRsp sysParameterRsp = new SysParameterRsp();
			BeanUtils.copyProperties(sysParameter, sysParameterRsp);

			sysParameterRspList.add(sysParameterRsp);
		});

		return rsp;
	}

	@Override
	public void update(SysParameterUpdateReq req) {
		List<SysParameterReq> sysParameterReqList = req.getList();

		if(sysParameterReqList == null || sysParameterReqList.isEmpty()) {
			return;
		}

		sysParameterReqList.forEach(sysParameterReq -> {
			SysParameter sysParameter = new SysParameter();
			BeanUtils.copyProperties(sysParameterReq, sysParameter);

			sysParameterDAO.updateById(sysParameter);
		});

	}


}
