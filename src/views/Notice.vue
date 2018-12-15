<template>
    <div class="page">
        <!--<div class="tab">-->
            <!--<div class="item" id="item1">告白公园</div>-->
            <!--<div class="item" id="item2">精美范文</div>-->
        <!--</div>-->
        <div class="letter-wrap">
            <Scroll ref="scroll" :autoUpdate="true" @pullingUp="loadMore"  >

            <div class="letter" v-for="(item,index) in result">
                <div class="name">{{item.name}}:</div>
                <div class="content">{{item.content}}
                </div>
                <div class="bottom clear">
                    <div class="dianzan clear" @click="dianzan(index)">
                        <div class="img">
                            <img class="img-response" src="../assets/images/dianzan.png"/>
                        </div>
                        <div class="zi">{{item.dianzan}}</div>
                    </div>
                    <div class="huifu clear" @click="toHuiFu(index)">
                        <div class="img">
                            <img class="img-response" src="../assets/images/fasong.png"/>
                        </div>
                        <div class="zi">{{item.huifu.length}}</div>
                    </div>
                </div>

            </div>

         </Scroll>
        </div>
        <Back @click.native="back" :title="title"></Back>
    </div>
</template>

<script>

    import axios from '../util/request'
    import BottomBar from '@/components/BottomBar.vue'
    import Back from '@/components/Back.vue'
    export default {
        name: "Notice",
        mounted(){
            axios.get(`/message/getPublicNoitce?num=${this.num}`).then((result)=>{
                this.result =result.data
                console.log(this.result)
            })
        },
        data(){
            return {
                title:'告白公园',
                result:[],
                dianzanshu:0,
                huiFuIsShow:false,
                num:0
            }
        },
        components:{
            BottomBar,
            Back

        },
        methods:{
            // 加载更多数据
            async loadMore () {
                this.num+=5
                axios.get(`/message/getPublicNoitce?num=${this.num}`).then((res)=>{
                    this.result=this.result.concat(res.data)
                })
            },
            back(){
               this.$router.push({
                   path:'/'
               })
            },
            dianzan(index){
                //记录文章id
                var id=this.result[index]._id;
                console.log(id);
                //定义一个标志位，是否可以点赞
                var flag=true;
                //调取离线缓存看点赞列表是否存在
                var dianzanList = JSON.parse(localStorage.getItem('dianzanList'));
                //存在则继续插入文章ID
                if(!dianzanList){
                    var dianzanList = []
                    localStorage.setItem('dianzanList',JSON.stringify(dianzanList))
                }

                //点赞列表遍历文章ID是否存在,存在则点赞,不存在则取消
                JSON.parse(localStorage.getItem('dianzanList')).forEach((item)=>{
                    if(item.toString()==id.toString()){
                        console.log(item.toString());
                        console.log(id.toString());
                        flag=false;
                    }
                })

                if(flag==true){
                    this.result[index].dianzan++;
                    axios.post('/message/setDianZan',{
                        id:this.result[index]._id
                    }).then((res)=>{

                    })
                    dianzanList.push(id);
                    localStorage.setItem('dianzanList',JSON.stringify(dianzanList))
                }else{
                    this.$tips('你已经点过赞了')
                }
            },
            toHuiFu(index){
                var id=this.result[index]._id;
                var name=this.result[index].name;
                this.$router.push({
                    path:'/Huifu',
                    query:{
                        id:id,
                        name:name
                    }
                })
            }

        }
    }


</script>

<style scoped lang="stylus">


    .page
        background #f7ab9e
        height 100%
        overflow hidden
        .back
            color white
            position absolute
            left 0.6rem
            top 0.65rem
            font-size 0.4rem
            color #d80000
        .tab
         width 6rem
         height 0.7rem
         line-height 0.7rem
         display flex
         font-size 0.4rem
         margin 0 auto
         position: fixed;
         top: 0.6rem;
         left: 2.1rem;
         .item
           flex 1
           background white
           border 1px solid #dd3a3d
         #item1
           border-radius 0.15rem 0rem 0rem 0.15rem
           border-right 0px
           background: #dd3a3d;
           color white
         #item2
           border-radius 0rem 0.15rem 0.15rem 0rem
           color #dd3a3d
     .letter-wrap
         padding-top: 1.75rem;
         height 16rem
         .letter
            background white
            width 95%
            margin 0 auto
            margin-top 0.4rem
            .bottom
                border-top: 1px solid #e1e1e1;
                padding: 0rem 0.3rem;
              .dianzan
                float left
                width 2.5rem
                img
                  float left
                  width 0.7rem
                  height 0.7rem
              .huifu
                  float left
                  width 2.5rem
                  img
                   float left
                   width 0.7rem
                   height 0.6rem
             .zi
                float: left;
                font-size: 0.4rem;
                color: #2d2e45;
                font-weight: bold;
                margin-top: 0.1rem;
                margin-left: 0.2rem;
            .name
                font-size: 0.4rem;
                color: #dd3a3d;
                text-align: left;
                font-weight: bold;
                padding-left: 0.3rem;
                padding-top: 0.3rem;
            .content
              font-size 0.4rem
              text-align left
              display block
              vertical-align top
              padding 0.3rem
              padding-top 0rem
              padding-bottom 0rem
              line-height 1rem
              color: #27272f;
              word-break: break-all;
              word-wrap: break-word;


</style>