<template>
    <div>
        <div class="top-box">
            <ul>
                <li v-for="(item,index) in topItem"
                    :key="index"
                    @click="detail(item)">
                    <div class="top-img">
                        <img :src="item.url" />
                    </div>
                    <div class="top-name">{{item.name}}</div>
                    <div class="top-icon"><img src="https://m3ws.kugou.com/v3/static/images/index/arrow_icon.png" /></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    // import toplist from '../js/muise-list.js'
    export default {
        // name: '酷狗音乐排行列表',
        data () {
            return {
                topItem: []
            }
        },
        created () {
            this.getData()
        },
        methods: {
            async getData () {
                let res = await this.$http.get('cbg27')
                this.topItem = res.topList
            },
            detail (row) {
                this.$nextTick(() => {
                    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                    if (scrollTop) {
                        scrollTop = window.scrollY + 106
                        this.$store.dispatch('setScroll', { scrollTop: scrollTop })
                    }
                    this.$router.push(`/page/top-detail/${row.id}/top`)
                })
            }
        }
    }
</script>
