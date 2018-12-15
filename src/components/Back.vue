<template>
    <div style="height: 1rem">
        <div class="title-wrap">
            <div id="back" @click="goBack()">
                <img class="img-response" src="../assets/images/back.png"/>
            </div>
            <div class="title">{{title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Back",
        props:{
            title:String
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="stylus">
    .title-wrap
        position fixed
        top 0rem
        left 0rem
        width 100%
        height 1rem
        background #f16c58
        color white
        font-size 0.5rem
        line-height 1rem
        text-align center
    #back
      position absolute
      float left
      left 0.3rem
      top 0.1rem
      width 0.9rem
      height 0.9rem
      z-index 999
</style>