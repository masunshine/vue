<template>
    <div class="detail-flow">
        <div class="kg-box">
            <div class="kg-title">
                <div class="kg-logo"></div>
                <div class="kg-uploader">
                    <span>下载酷狗</span>
                </div>
                <div class="kg-search"></div>
            </div>
        </div>
        <div class="detail-goback">
            <p>{{topName}}</p>
            <img src="https://m3ws.kugou.com/v3/static/images/index/goback_1.png"
                 @click="goback()" />
        </div>
        <div class="detail-logo">
            <img :src="topImg" />
        </div>
        <div class="detail-newtime"
             v-if="typeTime">
            <p>更新日期：{{momentTime}}</p>
        </div>
        <div class="muise-box">
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
    </div>
</template>
<script>
    import muiseList from '../js/muise-list.js'
    import { MessageBox } from 'mint-ui'
    import moment from 'moment'
    export default {
        // name: '酷狗音乐排行详情',
        data () {
            return {
                mList: muiseList.column,
                bottomShow: false,
                selectRow: null,
                topImg: '',
                topName: '',
                momentTime: moment().format('YYYY-MM-DD'),
                typeTime: false
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getData(vm.$route.params.id)
                vm.$nextTick(() => {
                    window.scroll(0, 0)
                })
            })
        },
        methods: {
            getData (id) {
                let arr = []
                if (this.$route.params.type === 'top') {
                    arr = muiseList.topList
                    this.typeTime = true
                } else if (this.$route.params.type === 'music') {
                    arr = muiseList.musicCloumn
                    this.typeTime = false
                } else {
                    arr = muiseList.hotCloumn
                    this.typeTime = false
                }
                arr.forEach(r => {
                    if (r.id === id) {
                        this.topImg = r.url
                        this.topName = r.name
                    }
                })
            },
            goback () {
                this.$router.back(-1)
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
