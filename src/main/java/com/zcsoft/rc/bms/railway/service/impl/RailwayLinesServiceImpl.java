package com.zcsoft.rc.bms.railway.service.impl;


import com.sharingif.cube.support.service.base.impl.BaseServiceImpl;
import com.zcsoft.rc.bms.railway.service.RailwayLinesService;
import com.zcsoft.rc.railway.dao.RailwayLinesDAO;
import com.zcsoft.rc.railway.model.entity.RailwayLines;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class RailwayLinesServiceImpl extends BaseServiceImpl<RailwayLines, java.lang.String> implements RailwayLinesService {
	
	private RailwayLinesDAO railwayLinesDAO;

	@Resource
	public void setRailwayLinesDAO(RailwayLinesDAO railwayLinesDAO) {
		super.setBaseDAO(railwayLinesDAO);
		this.railwayLinesDAO = railwayLinesDAO;
	}
	
	
}
