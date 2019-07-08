<template>
  <span ref="editor-parent"
        @click="onEditorParentClick"
        :class="{autoAdjustToolBarVisible: autoAdjustToolBarVisible}">
    <div class="editor"
         ref="editor"
         :style="{height: height}">
    </div>
  </span>
</template>
<script>
  import E from 'wangeditor'

  export default {
    props: {
      content: null,
      // height: {
      //   type: String,
      //   default: '40px'
      // },
      autoAdjustToolBarVisible: {
        type: Boolean,
        default: false
      }
    },
    // model: {
    //   prop: 'content',
    //   event: 'change'
    // },
    data () {
      return {
        editor: {}
      }
    },
    computed: {
      height () {
        return this.autoAdjustToolBarVisible ? '40px' : '200px'
      },
      value () {
        return this.content
      }
    },
    methods: {
      // 初始化编辑器
      initEditor () {
        this.editor = new E(this.$refs.editor)

        // editor.config.zIndex = 10
        // editor.config.showLinkImg = false
        this.editor.config.menus = [
          'bold',
          'underline',
          'italic',
          'strikethrough',
          'eraser',
          '|',
          'fontfamily',
          'fontsize',
          'head',
          'unorderlist',
          'orderlist',
          'alignleft',
          'aligncenter',
          'alignright',
          '|',
          'table',
          'img',
          '|',
          'undo',
          'redo',
        ]
        // 自定义配置颜色（字体颜色、背景色）
        this.editor.config.colors = [
          '#000000',
          '#333333',
          '#666666',
          '#999999',
          '#cccccc',
          '#cc2a30',
          '#c24f4a',
          '#F56C6C',
          '#f9963b',
          '#E6A23C',
          '#1D8CE0',
          '#20A0FF',
          '#58B7FF',
          '#13CE66',
          '#7b5ba1',
          '#ffffff'
        ]
        this.editor.config.uploadImgUrl = `${this.$conf.API_PATH}/oss/upload.do`
        this.editor.config.uploadImgFileName = 'file'

        // 自定义load事件
        this.editor.config.uploadImgFns.onload = (resultText, xhr) => {
          // resultText 服务器端返回的text
          // xhr 是 xmlHttpRequest 对象，IE8、9中不支持

          const result = JSON.parse(resultText)

          this.editor.command(null, 'InsertImage', result.data)
        }

        const vm = this
        this.editor.onchange = function () {
          let txt = this.$txt.html()
          // <(?<tagName>\w+)> <\/\k<tagName>> 匹配标签
          // 非空验证
          // let notNullReg = /^(<(?<tagName>\w+)>(<br>)*(&nbsp;\s?)*<\/\k<tagName>>)+$/
          // if (notNullReg.test(txt) || txt === '') {
          //   vm.$emit('update:content', ' ')
          //   return
          // }
          // let brReg = /^<p><br><\/p>/
          // console.log(brReg.test(txt))
          // 去掉富文本编辑器自带的换行
          let reg = /^<([^>]+?)><br><\/\1\s*>/i
          txt = txt.replace(reg, ' ')
          vm.$emit('update:content', txt)
        }

        this.editor.create()

        if (this.autoAdjustToolBarVisible) {
          this.hideMenu()
        }
        this.adjustHeight()
      },
      hideMenu () {
        const oCurEditorParent = this.$refs['editor-parent']
        const oCurEditorMenu = oCurEditorParent.children[0].children[0]
        oCurEditorMenu.style.display = 'none'
      },
      adjustHeight () {
        const oCurEditorParent = this.$refs['editor-parent']
        const oCurEditorText = oCurEditorParent.children[0].children[1]
        oCurEditorText.style.height = this.height
      },
      onEditorParentClick () {
        const oAllEditor = document.querySelectorAll('.wangEditor-container')
        const oCurEditorParent = this.$refs['editor-parent']
        const oCurEditorText = this.$refs.edior
        const oCurEditorMenu = oCurEditorParent.children[0].children[0]
        for (let k in oAllEditor) {
          if (!oAllEditor.hasOwnProperty(k)) continue

          let oEditor = oAllEditor[k]
          let oEditorParent = oEditor.parentElement
          let oEditorMenu = oEditor.children[0]
          let oEditorText = oEditor.children[1]

          // 对当前元素不做操作
          if (oEditorText === oCurEditorText) continue
          // 对不需要自动调整高度的元素也不进行操作
          if (oEditorParent.className.indexOf('autoAdjustToolBarVisible') < 0) continue

          oEditorText.style.height = '40px'
          oEditorMenu.style.display = 'none'
        }

        this.$refs.editor.style.height = '200px'
        oCurEditorMenu.style.display = 'block'
      },
      // 重新触发渲染函数
      reRender () {
        this.editor.$txt.html(this.value)
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.initEditor()
        this.editor.$txt.html(this.value)
      })
    }
  }
</script>
<style lang="sass" scoped>
  /deep/ ol li
    list-style: decimal

  /deep/ .wangEditor-txt
    padding-bottom: 0
    p, h1, h2, h3, h4, h5, table, pre
      margin: 0
</style>
