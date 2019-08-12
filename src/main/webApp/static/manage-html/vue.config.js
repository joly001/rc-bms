module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/assets/css/_variables.sass" , "@/assets/css/_placeholders.sass", "@/assets/css/_mixins.sass", "@/assets/css/_schemes.sass";`,
      }
    },
  },
  devServer: {
    disableHostCheck: true,
    proxy: 'http://47.93.254.21:9091/'
  },
  baseUrl: '',
}

