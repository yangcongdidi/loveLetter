<template>
    <div class="tips" v-show="show">
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "tips",
        props:['message','show']
    }
</script>

<style lang="stylus" >
    .tips
        position absolute
        top 0
        left 0
        background yellowgreen
        width 100%
        height 1rem
        color white
        transition 2s all
</style>