<template>
    <div class="page">
        <div class="caozuolan">

            <div class="send" @click="send">
                <img class="icon" src="../assets/images/send.png"/>
                发送
            </div>
        </div>
        <div class="writeLitter-wrap">
            <div class="line-box">
                <div id="editorContainer" class="letter-input"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>

    </div>
</template>

<script>
    import { ZxEditor } from 'zx-editor'
    var zxEditor
    export default {
        name: "WriteLitter",
        mounted(){
             zxEditor = new ZxEditor('#editorContainer', {
                autoSave: 5,
                padding: 0,
                showToolbar: [ 'emoji',  ]
            })
            document.querySelector('.zxeditor-content-wrapper').style.height='13rem'
            document.querySelector('.zxeditor-content-wrapper p').style.padding='0px'
            document.querySelector('.zxeditor-content-wrapper p').style.lineHeight='1.2rem'
        },
        methods:{
            send(){
                this.content=document.querySelector('.zxeditor-content-wrapper p').innerText;
                if(this.content.length<10){
                    this.$tips('信的内容输入至少10字噢',{
                        delay: 1000
                    })
                    return
                };
                this.$store.commit('setContent',this.content);
                console.log('你发送的内容是:  \n' + this.$store.state.content)
                zxEditor.setContent('')
                this.$router.push({
                    path:'Dispatch',
                })

            }
        }
    }
</script>

<style  scoped lang="stylus">
    .page
        height: 100%;
        background: linear-gradient(#dd8576, #edc9c3);
        padding-top 1rem
        box-sizing border-box
        overflow hidden
     .icon
       width 1rem
       height 1rem
       display block
     .caozuolan
         z-index 9999
         position absolute
         top 0.3rem
         right 1rem
         width: 6rem;
         height: 50px;
         text-align: right;
         font-size 0.1rem
        .send
            display inline-block
            text-align center
            font-size 0.35rem
            color white
     .zxeditor-container .zxeditor-content-wrapper.is-empty:before
        color #555
        padding-bottom 0.1rem
     .writeLitter-wrap
        width 100%
        height 100%
         background: linear-gradient(#f7ab9e, #edc9c3);
        text-align center
        .line-box
            padding-top  2rem
            position relative
         .letter-input
            position: absolute;
            left: 0.39rem;
            top: 2.36rem;
            background: none;
            /* border: 0; */
            width: 90%;
            font-size: 0.5rem;
            border: 0;
            outline: none;
            text-align left
         .line
             display: block;
             width: 90%;
             height: 1.2rem;
             margin: 0 auto;
             border-bottom: 1px dashed #ffffff;
</style>