<template>
    <div class="bottom">
        <div class="bottom-wrap">
            <router-link to="/" class="item" >首页</router-link>
            <router-link to="Notice" class="item">告白公园</router-link>
            <router-link to="Paixingbang" class="item">排行榜</router-link>
            <router-link to="About" class="item">关于</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomBar"
    }
</script>

<style scoped lang="stylus">
    .bottom
        position fixed
        bottom 0
        width 100%
        font-size 0.4rem
        height  1rem
        line-height 1rem
        color #815d4b
        background #feb644
        z-index 9999
        text-align center
        .bottom-wrap
            display flex
            .item
               flex 1
               a
                color #815d4b !important
                color #815d4b
                flex 1
</style>