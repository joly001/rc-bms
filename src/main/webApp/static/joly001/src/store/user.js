

export default {
    state: {
        attributionGuid: '',
        token: '',
        nickName: '', 
        guid: '',
    },
    mutations: {
        set_attr (state, attr) {//设置用户 权限
            state.attributionGuid = attr || "";
        },
        set_token (state, token) {//设置登录token
            console.log(token)
            state.token = token || "";
        },
        set_nick_name (state, nickName) {//设置用户名称
            state.nickName = nickName || "";
        },
        set_guid (state, guid) {//设置用户Guid
            state.guid = guid || "";
        }
    },
    actions: {

    },
    getters: {

    }
}