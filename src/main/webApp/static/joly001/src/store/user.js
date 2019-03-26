import axios from '@/plugins/axios/http.js';
import { login } from '@/API/index.js';

export default {
    state: {
        username: '',
        checked: false
    },
    mutations: {

    },
    actions: {
        LOGIN ({commit, state}, loginInfo) {//登录
            return new Promise((resolve, reject) => {
                axios({
                    method: 'post',
                    url: login(),
                    data: {
                        username: loginInfo.username,
                        password: loginInfo.password
                    }
                }).then((res) => {
                    console.log(res)
                    if(res.status == 200) {
                        state.username = res.data.username;
                        let str = "登录成功"
                        resolve(str);
                    }
                }).catch((err) => {
                    console.log('loginErr',err)
                    reject(err)
                })
            })
            
        }
    },
    getters: {

    }
}