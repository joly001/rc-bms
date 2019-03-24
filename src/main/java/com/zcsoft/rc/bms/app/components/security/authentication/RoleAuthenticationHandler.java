package com.zcsoft.rc.bms.app.components.security.authentication;

import com.sharingif.cube.core.exception.CubeException;
import com.sharingif.cube.security.authentication.authority.tree.TreeMapAuthorityHandler;
import com.sharingif.cube.security.authentication.role.IRoleAuthenticationHandler;
import com.zcsoft.rc.bms.user.service.UserRoleService;
import com.zcsoft.rc.bms.user.service.UserService;
import com.zcsoft.rc.user.model.entity.Authority;
import com.zcsoft.rc.user.model.entity.User;
import com.zcsoft.rc.user.model.entity.UserRole;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

/**   
 *  
 * @Description:  [处理用户角色]   
 * @Author:       [Joly_Huang]   
 * @CreateDate:   [2014年3月20日 上午11:58:25]   
 * @UpdateUser:   [Joly_Huang]   
 * @UpdateDate:   [2014年3月20日 上午11:58:25]   
 * @UpdateRemark: [说明本次修改内容]  
 * @Version:      [v1.0] 
 *    
 */
@Component
public class RoleAuthenticationHandler implements IRoleAuthenticationHandler<User> {

	private UserService userService;

	private TreeMapAuthorityHandler treeMapAuthorityHandler;

	@Resource
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@Resource
	public void setTreeMapAuthorityHandler(TreeMapAuthorityHandler treeMapAuthorityHandler) {
		this.treeMapAuthorityHandler = treeMapAuthorityHandler;
	}

	@Override
	public void handleRole(User user) throws CubeException {
		List<Authority> authorityList = userService.getAuthoritiesByUserId(user.getId());

		if(authorityList == null || authorityList.isEmpty()) {
			return;
		}

		TreeMap<String, String> authoritieTreeMap = treeMapAuthorityHandler.handleAuthority(authorityList);

		user.setAuthorities(authoritieTreeMap);
	}


}
