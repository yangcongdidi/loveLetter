<template>
  <div class="page">
    <Back :title="title"></Back>
    <van-collapse class="van-collapse" v-model="activeName" accordion>
      <van-collapse-item title="什么是小洋情书" name="1">
        小洋情书是一个在线写情书，在线寄情书的app。只需轻松的在手机写上你想表白的话，
        就会有专人帮你代写，寄送到你喜欢的人手上。要是你不愿意透露自己的名字，
        帮你匿名表白。
      </van-collapse-item>
      <van-collapse-item title="价格" name="2">
        只需10元钱，帮你搞掂一切，就是这么简单任性！
      </van-collapse-item>
      <van-collapse-item title="联系我" name="3">
        我的邮箱:qq616605040@163.com
        有什么问题请发邮件到这里咨询
      </van-collapse-item>
    </van-collapse>
    <bottom-bar></bottom-bar>
  </div>

</template>

<script>
    import Back from '@/components/Back.vue'
    import BottomBar from '@/components/BottomBar.vue'
    export default {
        components: {
            BottomBar,
            Back
        },
        data() {
            return {
                title:'关于',
                activeName: '1'
            };
        }
    }
</script>
<style scoped lang="stylus">
  .page
    background #f7ab9e
    height 100%
    overflow hidden
    font-size 0.4rem
    text-align left
    .van-collapse
     margin-top 2rem
     border 0
    .van-cell__title
     color: #a90808;
     font-size: 0.5rem;
    .van-collapse-item
      width 90%
      margin 0 auto
      border-radius 10px
    .van-collapse-item__content
       font-size 0.3rem !important
       padding 0.1rem !important
  [class*=van-hairline]::after
      border 0 !important
      font-size 0.7rem

</style>
