<template>
    <div class="kg-box">
        <div class="kg-title">
            <div class="kg-logo"></div>
            <div class="kg-uploader">
                <span>下载酷狗</span>
            </div>
            <div class="kg-search"></div>
        </div>
        <div class="kg-content">
            <list></list>
        </div>
    </div>
</template>
<script>
    import list from './list'
    export default {
        components: { list },
        // name: '酷狗音乐首页',
        data () {
            return {

            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$nextTick(() => {
                    window.scroll(0, vm.$store.state.scrollTop)
                })
            })
        },
        created () {

        }
    }
</script>
