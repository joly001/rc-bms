import axios from 'axios';
import router from '@/router.js';
import store from '@/store.js';
import iView from 'iview';
import qs from 'qs';

axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://47.93.254.21:9091';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charse=UTF-8';

const tip = (msg) => {
    iView.$message.error(msg)
}

// 跳转登录页面，携带当前路由,等待登录成功时跳到目标页面
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            // localStorage.removeItem('token');
            // store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        // 404请求不存在
        case 404:
            tip('请求的资源不存在');
            break;
        default:
            console.log(other);
    }
}

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
instance.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
        const token = store.state.token;
        token && (config.headers.Authorization = token);

        if (config.method == 'post') {
            config.headers.Accept = `application/json`
            config.headers.ContentType = `application/json`
            // config.data = qs.stringify(config.data);
        }
        return config;
    },
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // store.commit('changeNetwork', false);
        }
    });

//路由导航
router.beforeEach((to, from, next) => {
    //NProgress.start();
    //   if (to.path == '/login') {
    //       sessionStorage.removeItem('token');
    //        next()
    //        return;
    //   }
    //   let token = sessionStorage.getItem("token");
    //   if (token) {
    //     if (to.path == '/') {
    //          next({ path: '/home'})
    //          return;
    //     }
    //      next()
    //   }else{
    //       next({ path: '/login'})
    //   }

    // start暂时使用代码段
    if (to.path == '/') {
        next({ path: '/home' })
        return;
    }
    next()
    // end暂时使用代码段
})

export default instance;
