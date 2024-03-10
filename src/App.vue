<template>
  <div id="#app">
    <transition name="slide-left">
        <router-view class="router-view"></router-view>
    </transition>
      <BottomBar></BottomBar>

  </div>
</template>
<style lang="stylus">


#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
body,html
  margin 0
  padding 0
  height 100%
  background #f7ab9e
input[type=button], input[type=submit], input[type=file], button
  -webkit-appearance: none;
a
  display block
  text-decoration: none
  color #815d4b
.img-response
  max-width 100%
  height auto
  display inline-block
.input
  margin:0;
  padding:0;
.vue-datepicker input
  background  none !important
  border 0 !important
  padding-left 0 !important

.vue-datepicker ::-webkit-input-placeholder
  color white
.vue-toast-demo .tips-container .text
  font-size: 0.4rem !important;
  margin: 0;
.vue-toast-demo .tips-container
  width 80% !important
  height 1.5rem !important
  line-height 1.5rem !important
.clear:after
  display block
  content ' '
  height 0px
  clear both

::-webkit-input-placeholder
  color:    white;

:-moz-placeholder
  color:    white;

::-moz-placeholder
  color:    white;

:-ms-input-placeholder
  color:    white;


.router-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align center
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: all .6s cubic-bezier(.55,0,.1,1);
  overflow hidden
}
.slide-left-enter {
  opacity: 0.01;
  transform: translate(-1rem, 0);
}
.slide-left-leave-active{
  opacity: 0;
}





.zxeditor-container .zxeditor-toolbar-wrapper{
  background-color:transparent !important;
} 





</style>

<script>
import BottomBar from '@/components/BottomBar.vue'
    export default {
        name: 'App',
        data() {
            return {
                slideDirection: 'slide-right', // 默认动态路由变化为slide-right
            }
        },
        components:{
          BottomBar
        },
        watch: {
            /* eslint-disable */
            '$route'(to, from) {
                console.log(to.path);
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'

            },
        },
    }
</script>
