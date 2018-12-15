<template>
    <div class="page">
        <Back :title="title"></Back>
        <Scroll ref="scroll" :autoUpdate="true" class="huifu-wrap clear">
            <div class="meiyou" v-if="result.length<1">
                暂时还没有评论,赶快抢第一个吧~
            </div>
            <div class="item clear" v-for="(item) in result">
                    <div class="touxiang-wrap">
                        <div class="touxiang">
                            <img class="img-response" src="../assets/images/cat.png"/>
                        </div>
                    </div>
                <div class="content">
                    <div class="name">{{item.name}}</div>
                    <div class="date">{{item.date}}</div>
                    <div class="message">{{item.message}}</div>
                </div>
                <div class="liaotian_button" @click="liaotian()">聊天</div>
            </div>
        </Scroll>

        <div id="bottom" >
            <div class="huifu" contenteditable="true" @click="clearPlaceholder">{{placeholder}}</div>
            <!--<div class="huifu">-->
                <!--<input type="input" autofocus="autofocus" id="message" :placeholder="placeholder" v-model="message"/>-->
            <!--</div>-->
            <div class="huifu-button" @click="huifu()">
                发送
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '../util/request'
    import Back from '../components/Back'
    export default {
        name: "Huifu",
        components:{
            Back
        },
        data(){
            return {
                title:'热门评论',
                result:[],
                placeholder:`回复${this.$route.query.name}:`,
            }
        },

        methods:{
             compare(property) {
                 return function (a, b) {
                     var value1 = a[property];
                     var value2 = b[property];
                     return value2 - value1;
                 }
             },
            getResult(){
                var id=this.$route.query.id
                axios.get(`/message/getHuiFu?id=${id}`,).then((res)=>{
                    this.result=res.data.res.huifu
                    this.result.sort(this.compare('updateTime'))
                    console.log(this.result)
                })
            },
            huifu(){
                var id=this.$route.query.id
                if(document.querySelector('.huifu').innerText==''){
                    this.$tips('不能为空')
                    return
                }
                axios.post('/message/SetHuiFu',{
                    id:id,
                    message:document.querySelector('.huifu').innerText
                }).then(()=>{
                    document.querySelector('.huifu').innerText=''
                    this.$tips('评论成功')
                    this.getResult()
                })
            },
            liaotian(){
                this.$tips('作者正在开发中..')
            },
            clearPlaceholder(){
                this.placeholder=''
            }
        },
        mounted(){
            this.getResult()
        }

    }
</script>

<style scoped lang="stylus">
    .page
       background white
    .title
      font-size 0.4rem
      height 0.8rem
      line-height 0.8rem
      color gray
      text-align left
      padding-left 0.2rem
      color white
      background #b53535
    .huifu-wrap
     .meiyou
        padding-top 0.4rem
        font-size 0.5rem
     .item
       position relative
       padding 0.5rem 0.5rem
       border-bottom 1px solid #dcdcdc
       .touxiang-wrap
           float left
           width 20%
           box-sizing border-box
           .touxiang
             width 1.5rem
             height 1.5rem
             overflow hidden
             background white
             border-radius 50%
             border 1px solid gray
      .content
         width 80%
         float left
         text-align left
         padding-left 0.2rem
         box-sizing border-box
         .name
          font-size 0.4rem
          color #444444
         .date
          font-size 0.2rem
          color #9a9a9a
          margin 0.1rem 0rem
         .message
          font-size 0.3rem
      .liaotian_button
        width: 1.3rem;
        position: absolute;
        display: inline-block;
        border: 2px solid #4dbf4d;
        background: #fff;
        color: #4dbf4d;
        border-radius: 3px;
        right: 0.4rem;
        font-size: 0.2rem;
  #bottom
       z-index 9999
       position fixed
       left 0px
       bottom 0px
       width 100%
       /*height 1rem*/
       background #222121
       color white
       text-align left
       .huifu
         width 8rem
         outline none
         border none
         background none
         color white
         font-size 0.4rem
         text-align left
         display block
         border-radius 5px
         padding 0.2rem 0rem
         padding-left 0.2rem
       .huifu-button
        position absolute
        top 0
        right 0
        font-size: 0.4rem;
        color: #fff;
        width: 1.7rem;
        line-height: 1rem;
        background: #b53535;
        text-align center
</style>