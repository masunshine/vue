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
        <div class="mc-goback">
            <p>{{topName}}</p>
            <img src="https://m3ws.kugou.com/v3/static/images/index/goback.png"
                 @click="goback()" />
        </div>
        <div class="mc-list">
            <div class="muise-list"
                 v-for="(item,index) in mList"
                 :key="index"
                 @click="playMusic(item)">
                <div><img :src="item.url" /></div>
                <div class="list-name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import muiseList from '../js/muise-list.js'
    export default {
        // name: '酷狗音乐歌手详情',
        data () {
            return {
                mList: muiseList.hotCloumn,
                selectRow: null,
                topImg: '',
                topName: ''
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getData()
                vm.$nextTick(() => {
                    window.scroll(0, vm.$store.state.scrollTop)
                })
            })
        },
        methods: {
            getData () {
                this.topName = this.$route.params.name
            },
            goback () {
                this.$router.back(-1)
            },
            playMusic (row) {
                this.$nextTick(() => {
                    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                    if (scrollTop) {
                        scrollTop = window.scrollY + 100
                        this.$store.dispatch('setScroll', { scrollTop: scrollTop })
                    }
                    this.$router.push(`/page/top-detail/${row.id}/mc`)
                })
            }
        }
    }
</script>
