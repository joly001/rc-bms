import Vue from 'vue'
import conf from './config'
import enums from './enums'
import router from '../../router'
import {Loading} from 'element-ui'
import Axios from 'axios'
import app from '../../main'
// 全局请求函数
Axios.defaults.withCredentials = true
let lastUrl = ''
Vue.prototype.$ajax = function (obj) {
  let loading = false
  // 如果连续点击 则直接返回
  // if(obj.url === lastUrl && loading = false){
  //   return
  // }
  lastUrl = obj.url
  if (obj.el) {
    loading = Loading.service({
      target: obj.el,
      // 如果 noText = true 则不展示加载文案
      text: obj.noText ? null : '拼命加载中',
    })
  }
  // 将query中的空字符串转为
  for(let i in obj.query){
    if(obj.query[i] === ''){
      obj.query[i] = undefined
    }
  }
  if(obj.query && obj.query.hasOwnProperty('condition')){
    let condition =  obj.query.condition
    for(let i in condition){
      if(obj.query.condition[i] === '' || obj.query.condition[i] === null){
        obj.query.condition[i] = undefined
      }
    }
  }
  return new Promise((resolve, reject) => {
    Axios.post(app.$conf.API_PATH + obj.url, obj.query || {}).then(resp => {
      if (obj.el) {
        loading.close()
        loading = false
      }
      if(resp.data._exceptionMessage === '000002'){
        app.$router.push('/login')
        return
      }
      if (resp.data._tranStatus) {
        resolve(resp.data._data)
      } else {
        app.$message({
          showClose: true,
          message: resp.data._exceptionLocalizedMessage,
          type: 'error'
        })
        reject(resp)
      }
    }).catch(e => {
      if (obj.el) {
        loading.close()
        loading = false
      }
      app.$message({
        showClose: true,
        message: '网络错误',
        type: 'error'
      })
      reject(e)
    })
  })
}

// 日期转换函数
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2017-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2017-7-2 8:9:4.18
window.Date.prototype.$Format = function (fmt) {
  let o = {
    'M+': this.getMonth() + 1,                    // 月份
    'd+': this.getDate(),                         // 日
    'h+': this.getHours(),                        // 小时
    'm+': this.getMinutes(),                      // 分
    's+': this.getSeconds(),                      // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3),  // 季度
    'S': this.getMilliseconds()                   // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)))
    }
  }
  return fmt
}
// 表格查询通用函数
Vue.prototype.$search = function (table, val) {
  if (val !== undefined || table.query.pageNo === undefined) {
    table.query.pageNo = val || 1
  }
  if (!table.query.pageSize) {
    table.query.pageSize = app.$store.getters.getPageSize
  }
  return new Promise((resolve, reject) => {
    this.$ajax(table)
      .then(json => {
        table.list = json.list
        table.noData = table.total = json.total
        resolve(table)
      })
  })
}

// 成功类型的通用提示
Vue.prototype.$remind = function (str) {
  app.$notify({
    title: '成功',
    message: str,
    type: 'success'
  })
}
// 截取时间字符串过滤器
Vue.filter('substrTime', function (val, index = 10) {
  if (val) {
    return val.substr(0, index)
  } else {
    return '--'
  }
})

function html2text (val) {
  if (!val) return '--'
  return val.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, '')
    .replace(/<[^>]+?>/g, '')
    .replace(/\s+/g, ' ')
    .replace(/ /g, ' ')
    .replace(/>/g, ' ')
    .replace(/&nbsp;/ig, ' ')
}

// 将html代码转成纯文本
Vue.filter('html2text', val => {
  return html2text(val)
})

// 将数字转中文
function sectionToChinese (section) {
  const chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  // const chnUnitSection = ['', '万', '亿', '万亿', '亿亿']
  const chnUnitChar = ['', '十', '百', '千']
  let strIns = ''
  let chnStr = ''
  let unitPos = 0
  let zero = true
  while (section > 0) {
    let v = section % 10
    if (v === 0) {
      if (!zero) {
        zero = true
        chnStr = chnNumChar[v] + chnStr
      }
    } else {
      zero = false
      strIns = chnNumChar[v]
      strIns += chnUnitChar[unitPos]
      chnStr = strIns + chnStr
    }
    unitPos++
    section = Math.floor(section / 10)
  }
  return chnStr
}

Vue.filter('sectionToChinese', sectionToChinese)

//  全局定义eventBus
const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get: () => {
      return EventBus
    }
  }
})
// 配置文件
Vue.prototype.$conf = conf

// 枚举文件
Vue.prototype.$enums = enums

Vue.prototype.$cloneObj = function clone (item) {
  if (!item) {
    return item
  } // null, undefined values check

  let types = [Number, String, Boolean]
  let result = null

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  // 一些通过new方式建立的东东可能会类型发生变化，我们在这里要做一下正常化处理
  // 比如new String('aaa'), or new Number('444')
  types.forEach(type => {
    if (item instanceof type) {
      result = type(item)
    }
  })

  if (result === null) {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      result = []
      item.forEach(function (child, index, array) {
        result[index] = clone(child)
      })
    } else if (typeof item === 'object') {
      // testign that this is DOM
      //如果是dom对象，那么用自带的cloneNode处理
      if (item.nodeType && typeof item.cloneNode === 'function') {
        let result = item.cloneNode(true)
      } else if (!item.prototype) { // check that this is a literal
        // it is an object literal
        //如果是个对象迭代的话，我们可以用for in 迭代来赋值
        result = {}
        for (let i in item) {
          if (item.hasOwnProperty(i)) {
            result[i] = clone(item[i])
          }
        }
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        //这里解决的是带构造函数的情况，这里要看你想怎么复制了，深得话，去掉那个false && ，浅的话，维持原有的引用，
        //但是我不建议你去new一个构造函数来进行深复制，具体原因下面会解释
        if (false && item.constructor) {
          // would not advice to do that, reason? Read below
          //朕不建议你去new它的构造函数
          result = new item.constructor()
        } else {
          result = item
        }
      }
    } else {
      result = item
    }
  }
  return result
}

// cookie操作
Window.prototype.$Cookie = {
  //设置cookie
  setCookie (name, value, hours, path) {
    var name = escape(name) //进行编码
    var value = escape(value)//进行编码
    var expires = new Date()
    expires.setTime(expires.getTime() + hours * 3600000)
    path = path == '' ? '' : ';path=' + path
    var _expires = (typeof hours) == 'string' ? '' : ';expires=' + expires.toUTCString()
    document.cookie = name + '=' + value + _expires + path
  },
  //获取cookie
  getCookieValue (name) {
    var name = escape(name) //进行编码
    //读cookie属性，这将返回文档的所有cookie
    var allcookies = document.cookie
    //查找名为name的cookie的开始位置
    name += '='
    var pos = allcookies.indexOf(name)
    //如果找到了具有该名字的cookie，那么提取并使用它的值
    if (pos != -1) {                       //如果pos值为-1则说明搜索"version="失败
      var start = pos + name.length         //cookie值开始的位置
      var end = allcookies.indexOf(';', start)    //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
      if (end == -1) end = allcookies.length    //如果end值为-1说明cookie列表里只有一个cookie
      var value = allcookies.substring(start, end) //提取cookie的值
      value = unescape(value)  //对它解码
      return (value)
    }
    else return ''                //搜索失败，返回空字符串
  },
  //删除cookie
  deleteCookie (name, path) {
    var name = escape(name)
    var expires = new Date(0)
    path = path == '' ? '' : ';path=' + path
    document.cookie = name + '=' + ';expires=' + expires.toUTCString() + path
  },
  // 清空cookie
  delectAllCookie () {
    let keys = document.cookie.match(/[^ =;]+(?=\=)/g)
    if (keys) {
      for (var i = keys.length; i--;)
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
  }
}

// table

