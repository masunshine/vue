<template>
    <div class="mc-box">
        <div class="mc-tabls">
            <ul>
                <li>
                    <div @click="mcDetail('热门歌手')">
                        <span>热门歌手</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mc-tabls">
            <ul>
                <li>
                    <div @click="mcDetail('华语男歌手')">
                        <span>华语男歌手</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
                <li>
                    <div @click="mcDetail('华语女歌手')">
                        <span>华语女歌手</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
                <li>
                    <div @click="mcDetail('华语组合')">
                        <span>华语组合</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mc-tabls">
            <ul>
                <li>
                    <div @click="mcDetail('日韩男歌手')">
                        <span>日韩男歌手</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
                <li>
                    <div @click="mcDetail('日韩女歌手')">
                        <span>日韩女歌手</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
                <li>
                    <div @click="mcDetail('日韩组合')">
                        <span>日韩组合</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mc-tabls">
            <ul>
                <li>
                    <div @click="mcDetail('欧美男歌手')">
                        <span>欧美男歌手</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
                <li>
                    <div @click="mcDetail('欧美女歌手')">
                        <span>欧美女歌手</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
                <li>
                    <div @click="mcDetail('欧美组合')">
                        <span>欧美组合</span>
                        <i class="mc-icon"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    // import toplist from '../js/muise-list.js'
    export default {
        // name: '酷狗音乐歌手列表',
        data () {
            return {

            }
        },
        created () {

        },
        methods: {
            mcDetail (row) {
                this.$nextTick(() => {
                    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                    if (scrollTop) {
                        scrollTop = window.scrollY + 106
                        this.$store.dispatch('setScroll', { scrollTop: scrollTop })
                    }
                    this.$router.push(`/page/mc-detail/${row}`)
                })
            }
        }
    }
</script>
