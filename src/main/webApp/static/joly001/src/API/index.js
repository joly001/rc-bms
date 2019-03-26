import axios from '@/plugins/axios/http.js';

const baseUrl = 'http://47.93.254.21:9091';

export const login = (loginInfo) => {//登录
	
	return baseUrl+'/rc-bms/user/login';

}