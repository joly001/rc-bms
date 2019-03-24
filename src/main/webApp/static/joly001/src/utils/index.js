import store from '../store'

export const getDocuH = () => {//获取body高度
    let height = document.body.clientHeight;
    return height;
}

export const formDate = (date) => {//转换日期格式
    var dateTime = date.slice(date.indexOf('(')+1,date.indexOf(')'));
        dateTime = parseInt(dateTime)
    var newDate = new Date(dateTime);
    var year = newDate.getFullYear;
    var y = newDate.getFullYear();
    var m = newDate.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = newDate.getDate();
    d = d < 10 ? ('0' + d) : d;
    newDate = y + '-' + m + '-' + d;
    return newDate
}

export const updateVueX = () => {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        store.replaceState(Object.assign({}, store.state,JSON.parse(sessionStorage.getItem("store"))))
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(store.state))
    })
}