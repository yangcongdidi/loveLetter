<template>
    <div class="page">
        <Back :title="title"></Back>
        <div class="top-banner clear">
            <div class="touxiang">
                <img class="img-response" src="../assets/images/cat.png"/>
            </div>
            <div class="content">
                <div class="intro">情书达人</div>
                <div class="name">小洋</div>
                <div class="dianzanshu"><span class="num">15636</span><span>&nbsp;&nbsp;|&nbsp;      点赞数</span></div>
            </div>
        </div>

        <div class="top-paixing">
            <div class="item clear">
                <div class="xuhao" style="color: #d93232">2</div>
                <div class="touxiang">
                    <img class="img-response" src="../assets/images/panda.png"/>
                </div>
                <div class="content">
                    <div class="name">黑骑一户</div>
                    <div class="dianzanshu"><span class="num">15636</span><span>&nbsp;&nbsp;|&nbsp;      点赞数</span></div>
                </div>
            </div>
            <div class="item clear">
                <div class="xuhao" style="color: orange">3</div>
                <div class="touxiang">
                    <img class="img-response" src="../assets/images/panda.png"/>
                </div>
                <div class="content">
                    <div class="name">不知名用户</div>
                    <div class="dianzanshu"><span class="num">15636</span><span>&nbsp;&nbsp;|&nbsp;      点赞数</span></div>
                </div>
            </div>
            <div class="item clear">
                <div class="xuhao">4</div>
                <div class="touxiang">
                    <img class="img-response" src="../assets/images/panda.png"/>
                </div>
                <div class="content">
                    <div class="name">陈奕迅</div>
                    <div class="dianzanshu"><span class="num">15636</span><span>&nbsp;&nbsp;|&nbsp;      点赞数</span></div>
                </div>
            </div>
            <div class="item clear">
                <div class="xuhao">5</div>
                <div class="touxiang">
                    <img class="img-response" src="../assets/images/panda.png"/>
                </div>
                <div class="content">
                    <div class="name">地球最后一只怪兽</div>
                    <div class="dianzanshu"><span class="num">15636</span><span>&nbsp;&nbsp;|&nbsp;      点赞数</span></div>
                </div>
            </div>
            <div class="item clear">
                <div class="xuhao">6</div>
                <div class="touxiang">
                    <img class="img-response" src="../assets/images/panda.png"/>
                </div>
                <div class="content">
                    <div class="name">哭不是我的错</div>
                    <div class="dianzanshu"><span class="num">15636</span><span>&nbsp;&nbsp;|&nbsp;      点赞数</span></div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import Back from '../components/Back'
    import axios from '../util/request'
    export default {
        name: "Article",
        components:{
            Back
        },
        data(){
            return {
                title:'排行榜',
                result:[]
            }
        },
        mounted(){
            axios.get('/api/user/getTop').then((res)=>{

            })
        }
    }
</script>

<style scoped lang="stylus">
.page
   background white
   .top-banner
     width 100%
     /*background #b53535*/
     background #f16c58
     height 4rem
     overflow hidden
     .touxiang
        float: left;
        width: 3rem;
        height: 3rem;
        margin-top: 0.5rem;
        margin-left: 1.2rem;
        border-radius: 50%;
        background: white;
        overflow: hidden;
       img
        border-radius 50%
     .content
        float: left;
        font-size: 0.7rem;
        color: #fff;
        margin-left: 1rem;
        margin-top: 0.9rem;
        text-align: left;
        .intro
          font-size 0.5rem
          color #dde31f
        .name
          font-size 0.6rem
          margin: 0.1rem 0rem;
          font-weight bold
        .dianzanshu
          font-size 0.4rem
   .top-paixing
     .item
        padding: 0.3rem 0rem;
        padding-left: 0.6rem;
        border-bottom: 1px solid #ffbaba;
        .xuhao
            float: left;
            font-size: 0.6rem;
            color: #3f3f3f;
            margin-top: 0.6rem;
        .touxiang
            float: left;
            width: 2rem;
            height: 2rem;
            margin-left: 1.2rem;
            border-radius: 50%;
            background: #fff;
            overflow: hidden;
            border: 1px solid #b0b0b0;
        img
            border-radius 50%
        .content
            float: left;
            font-size: 0.7rem;
            color: black;
            margin-left: 1rem;
            text-align: left;
            margin-top 0.4rem
            .intro
                font-size 0.5rem
                color #dde31f
            .name
                font-size 0.3rem
                margin: 0.1rem 0rem;
                font-weight bold
                color #b53535
            .dianzanshu
                font-size 0.4rem
                color #909599
</style>