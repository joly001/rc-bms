export default {
  $exportDetail: {
    methods: {
      $exportDetail(url,query = this.table.query) {
        let str = '?'
        for( let item  in query){
          if(query[item] && item !== 'pageNo' && item !== 'pageSize'){
            str += `${item}=${query[item]}&`
          }
        }
        window.open(this.$conf.API_PATH + url + str.substr(0,str.length - 1))
      }
    }
  },
  $spliceHTML:{
    methods:{
      $spliceHTML(html){
        html = html.replace('<html><head><META http-equiv="Content-Type" content="text/html; charset=UTF-8">', '')
        html = html.replace('</head>', '')
        html = html.replace('</body></html>', '')
        html = html.replace(/<h2>(.*)<\/h2>/, '')
        return html
      }
    }
  }
}


