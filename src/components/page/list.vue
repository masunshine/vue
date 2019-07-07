<template>
    <div class="kg-listcontent">
        <mt-navbar v-model="selected"
                   class="kg-tabs">
            <mt-tab-item id="1">新歌</mt-tab-item>
            <mt-tab-item id="2">排行</mt-tab-item>
            <mt-tab-item id="3">歌单</mt-tab-item>
            <mt-tab-item id="4">歌手</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="list-content">
                    <newmusic></newmusic>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="list-content">
                    <top></top>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="list-content">
                    <music-form></music-form>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="list-content">
                    <mc></mc>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    import newmusic from './new-music'
    import top from './top'
    import musicForm from './music-form'
    import mc from './mc'
    export default {
        // name: '酷狗音乐主列表页',
        components: { newmusic, top, musicForm, mc },
        data () {
            return {
                selected: this.$store.state.num
            }
        },
        watch: {
            selected: function (val) {
                this.$store.dispatch('getNum', { num: val })
                this.$nextTick(() => {
                    this.$store.dispatch('setScroll', { scrollTop: 0 })
                    window.scroll(0, 0)
                })
            }
        },
        created () {

        },
        methods: {

        }
    }
</script>
