<template>
    <div class="top-box">
        <ul>
            <li v-for="(item,index) in topItem"
                :key="index"
                @click="detail(item)">
                <div class="top-img">
                    <img :src="item.url" />
                </div>
                <div class="top-name">
                    <p>{{item.name}}</p>
                    <p class="top-cont">
                        <img src="https://m3ws.kugou.com/v3/static/images/index/icon_music.png" />
                        <span>{{item.conter}}</span>
                    </p>
                </div>
                <div class="top-icon"><img src="https://m3ws.kugou.com/v3/static/images/index/arrow_icon.png" /></div>
            </li>
        </ul>
    </div>
</template>
<script>
    import toplist from '../js/muise-list.js'
    export default {
        // name: '酷狗音乐排行列表',
        data () {
            return {
                topItem: toplist.musicCloumn
            }
        },
        created () {

        },
        methods: {
            detail (row) {
                this.$nextTick(() => {
                    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                    if (scrollTop) {
                        scrollTop = window.scrollY + 106
                        this.$store.dispatch('setScroll', { scrollTop: scrollTop })
                    }
                    this.$router.push(`/page/top-detail/${row.id}/music`)
                })
            }
        }
    }
</script>
