<template>
    <div class="muise-box">
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="http://imge.kugou.com/mobilebanner/20190521/20190521113653791515.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="http://imge.kugou.com/mobilebanner/20190611/20190611170643348474.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="http://imge.kugou.com/mobilebanner/20190611/20190611172827305137.jpg" /></mt-swipe-item>
        </mt-swipe>
        <div class="muise-list"
             v-for="(item,index) in mList"
             :key="index">
            <div class="list-name"
                 @click="playMusic(item)">{{item.name}} - {{item.muiseName}}</div>
            <div class="list-download"
                 @click="dowload(item.url)">
                <img src="https://m3ws.kugou.com/v3/static/images/index/download_icon_2.png" />
            </div>
        </div>
        <bottombox v-if="bottomShow"
                   :bottom-data="selectRow"></bottombox>
    </div>
</template>
<script>
    // import muiseList from '../js/muise-list.js'
    import { MessageBox } from 'mint-ui'
    export default {
        // name: '酷狗音乐新歌列表',
        data () {
            return {
                mList: [],
                bottomShow: false,
                selectRow: null
            }
        },
        created () {
            this.getData()
        },
        methods: {
            async getData () {
                let res = await this.$http.get('117d5b')
                this.mList = res.column
            },
            dowload (url) {
                MessageBox('提示', url)
            },
            playMusic (item) {
                this.bottomShow = true
                this.selectRow = item
                // this.$nextTick(() => (this.bottomShow = true))
            }
        }
    }
</script>
