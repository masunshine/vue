<template>
    <div>
        <input type="text"
               v-model="message" />
        <p>{{message}}</p>
        <input type="button"
               value="删除"
               @click="del" />
    </div>
</template>
<style scoped>
</style>
<script>
    export default {
        beforeCreate () {
            // 没有数据，没有dom
            console.log("beforeCreate", this.$data, this.$el)
        },
        created () {
            // 有数据，没有dom
            console.log("created", this.$data, this.$el)
        },
        beforeMount () {
            // beforeMount el？？
            console.group("beforeMount 挂载前状态===============》")
            console.log("%c%s", "color:red", "el     : " + this.$el) //已被初始化
            console.log("%c%s", "color:red", "data   : " + this.$data) //已被初始化
        },
        mounted () {
            // 有数据，有dom
            console.log("Mount", this.$data, this.$el)
        },
        beforeUpdate () {
            console.log("数据更新前")
        },
        updated () {
            console.log("数据更新后")
        },
        beforeDestroy () {
            console.log("删除之前")
        },
        destroyed () {
            console.log("删除之后")
        },
        data () {
            return {
                message: "这是测试数据"
            }
        },
        methods: {
            del () {
                //删除这个组件
                //不是将当前组件删除，而是清除当前页面vue的所有控制
                this.$destroy()
            }
        }
    }
</script>