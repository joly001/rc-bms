package com.zcsoft.rc.bms.app.chain;

import com.sharingif.cube.core.exception.CubeException;
import com.sharingif.cube.core.handler.chain.AbstractHandlerMethodChain;
import com.sharingif.cube.core.handler.chain.HandlerMethodContent;
import com.sharingif.cube.core.util.StringUtils;
import com.sharingif.cube.security.authentication.authority.IAuthorityRepertory;
import com.sharingif.cube.security.exception.validation.access.AccessDecisionCubeException;
import com.sharingif.cube.security.exception.validation.access.NoUserAccessDecisionCubeException;
import com.sharingif.cube.web.springmvc.request.SpringMVCHttpRequestContext;
import com.sharingif.cube.web.user.CoreUserHttpSessionManage;
import com.sharingif.cube.web.user.IWebUserManage;
import com.zcsoft.rc.bms.app.constants.ErrorConstants;
import com.zcsoft.rc.user.model.entity.User;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class UserAuthorityAccessDecisionChain extends AbstractHandlerMethodChain {

    public UserAuthorityAccessDecisionChain() {
        webUserManage = new CoreUserHttpSessionManage();
    }

    private IWebUserManage webUserManage;

    private String replaceContent;
    private Map<String,String> excludeMethods = new HashMap<String,String>();

    public String getReplaceContent() {
        return replaceContent;
    }

    public void setReplaceContent(String replaceContent) {
        this.replaceContent = replaceContent;
    }

    public Map<String, String> getExcludeMethods() {
        return excludeMethods;
    }

    public void setExcludeMethods(List<String> excludeMethods) {
        this.excludeMethods = new HashMap<String,String>(excludeMethods.size());
        for(String excludeMethod : excludeMethods) {
            this.excludeMethods.put(excludeMethod,excludeMethod);
        }
    }

    protected boolean authorityAccessDecision(IAuthorityRepertory<TreeMap<String, String>> authorityRepertory, String authorityCode) {
        TreeMap<String, String> authorities = authorityRepertory.getAuthorities();
        if(authorities == null) {
            return false;
        }

        return authorities.containsKey(authorityCode);
    }

    @Override
    public void before(HandlerMethodContent content) throws CubeException {
        String authorityCode = getAuthorityCode(content);
        if(null != excludeMethods.get(authorityCode)) {
            return;
        }

        SpringMVCHttpRequestContext httpRequestContext = content.getRequestContext();
        User user = webUserManage.getUser(httpRequestContext.getRequest());

        if(user == null) {
            throw new NoUserAccessDecisionCubeException();
        }

        if(!authorityAccessDecision(user, authorityCode)) {
            throw new AccessDecisionCubeException(ErrorConstants.ROLE_HAS_NOT_ENOUGH_RIGHTS);
        }

    }

    @Override
    public void after(HandlerMethodContent handlerMethodContent) throws CubeException {

    }

    protected String getAuthorityCode(HandlerMethodContent content) {
        String authorityCode = new StringBuilder().append(content.getHandlerMethod().getBean().getClass().getName()).append(".").append(content.getHandlerMethod().getMethod().getName()).toString();

        if(getReplaceContent() == null) {
            return authorityCode;
        }

        return StringUtils.replace(authorityCode, replaceContent, "");
    }
}
