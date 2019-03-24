<template>
    <Page id="page" :total="total" show-total @on-change="handleChange" :page-size="num" />
</template>
<script>
    export default {
        props: {           
            objName: {
                type: String,
                default () {
                    return 'formItem'
                }
            }
        },
        data: {
            index: 1,
            num: 18,
            total: 0,
        },
        methods: {
            handleChange (val) {
                this.$parent[this.objName].index = val;
                this.$parent.loadData();
            }
        },
        created () {
            this.index = this.$parent[this.objName].index;
            this.num = this.$parent[this.objName].num;
            this.total = this.$parent.total;
            console.log(this.total)
        }
    }
</script>
 
<style>
#page{
    margin: 20px 0;
}
</style>
