<template>
    <div class="bottom-box">
        <div class="bottom-userImg">
            <img src="http://singerimg.kugou.com/uploadpic/softhead/200/20190110/20190110174817500.jpg" />
        </div>
        <div class="bottom-name">
            <div class="bottom-settings">
                <div class="bottom-musicName">{{bottomData.muiseName}}</div>
                <div class="bottom-userNmae">{{bottomData.name}}</div>
            </div>
            <div class="bottom-paly">
                <div class="paly-zanting"></div>
                <div class="paly-nex"></div>
                <div class="paly-download"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        // name: '酷狗音乐底部播放器',
        data () {
            return {
                form: {
                    name: '',
                    muiseName: '',
                }
            }
        },
        props: {
            bottomData: {
                type: Object,
                default: () => ({})
            }
        },
        mounted () {
            this.getMusic()
        },
        methods: {
            getMusic () {
                // this.form = JSON.parse(JSON.stringify(this.bottomData))
                // this.form = { ...this.form, ...this.bottomData }
            }
        }
    }
</script>
