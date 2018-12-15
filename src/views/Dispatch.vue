<template>
    <div class="page">
        <div class="biaobaichi">
            <div class="panda clear">
                <div class="img"><img class="img-response" src="../assets/images/cat.png"/></div>
                <div class="content">
                    <div class="text">放进表白池</div>
                    <div class="intro">
                        在首页的表白池专区可以给大家看到噢~
                    </div>
                    <div class="button" @click="publicNotice">确定</div>
                </div>
            </div>
        </div>
        <div class="lovebook">
            <div class="panda clear">
                <div class="img"><img class="img-response" src="../assets/images/panda.png"/></div>
                <div class="content">
                    <div class="text">情书寄送</div>
                    <div class="intro">
                        免费代写,寄送只收邮局的费用了解一下~
                    </div>
                    <div class="button" @click="Dispatch">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '../util/request'
    import  WriteLitter  from '../views/WriteLitter'
    export default {
        name: "Dispatch",
        methods:{
            publicNotice(){
                this.$tips.show("发布成功", {
                    delay: 1500
                });

                //发送信的内容
                axios.post('/message/setPublicNoitce', {
                    content: this.$store.state.content,
                }).then(function (response) {

                })
                //跳转到告白公园
                this.$router.push({
                    path:'Notice',
                })
            },
            Dispatch(){
                this.$router.push({
                    path:'DispatchView',
                })
            }
        }
    }
</script>

<style  lang="stylus" scoped>
    .page
        height 100%
    .clear:after
        content ' '
        display block
        height 0px
        clear both
    .img-response
        max-width 100%
        display inline-block
    .biaobaichi
        width 100%
        height 50%
        background #feb644
        .panda
          width 100%
          padding-top 3rem
          .img
            box-sizing border-box
            padding-left 0.2rem
            width 30%
            float left
          .content
            width 70%
            float left
            text-align left
            padding-left 0.8rem
            box-sizing border-box
            .text
              font-size 1.1rem
            .intro
              font-size 0.4rem
            .button
              margin-top 0.3rem
              font-size: 0.5rem;
              border-radius: 0.1rem;
              padding: 0rem 0.8rem;
              border: 2px solid #df1913;
              display: inline-block;
              color: #f10e0e;
    .lovebook
        width 100%
        height 50%
        background #c86e70
        .panda
            width 100%
            padding-top 3rem
            .img
                box-sizing border-box
                padding-left 0.2rem
                width 30%
                float left
            .content
                width 70%
                float left
                text-align left
                padding-left 0.8rem
                box-sizing border-box
                .text
                    font-size 1.1rem
                .intro
                    font-size 0.4rem
                .button
                    margin-top 0.3rem
                    font-size: 0.5rem;
                    border-radius: 0.1rem;
                    padding: 0rem 0.8rem;
                    border: 2px solid #df1913;
                    display: inline-block;
                    color: #f10e0e;

</style>