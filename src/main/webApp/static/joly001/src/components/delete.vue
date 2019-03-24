<template>
    <span>
        <!-- 删除 -->
        <Button type="error" @click="remove" style="margin-right:10px;">批量删除</Button>
      <Modal v-model="showModal" width="360">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>一共选择了{{curData.length}}条</p>
          <p>是否永久删除记录？</p>
        </div>
        <div slot="footer">
          <Button type="error" size="large" long @click="del">删除</Button>
        </div>
      </Modal>
    </span>
</template>
<script>
    export default {
        name: 'back',
        props: {           
            curData: {
                type: Array,
                default: []
            }           
        },
        data () {
            return {
                Ids: [],//ID数组
                showModal: false
            }
        },
        methods: {
            remove() {//删除
                if(this.curData == []) {
                    this.$message.error("请勾选数据")
                    return ;
                }
                this.showModal = true;
            },
            del() {
                this.getIds();
            // 确认删除
            // axios.get('/',{
            //     parmas: {
            //         Ids: this.Ids
            //     }
            // }).then( (res) => {
            //     if (res.status == 200) {
            //         this.$message.success("删除成功");
                        // this.showDelete = false;
            //     }
            // }).catch( (err) => {
            //     console.log(err)
            //     this.$message.error("删除失败")
            // })
            },
            getIds () {
                let curData = this.curData;
                let Ids = [];
                for(let i = 0;i < curData.length; i++) {
                    Ids.push(curData[i].Id);
                } 
                this.Ids = Ids;
            }
        },
        created () {

        }
    }
</script>