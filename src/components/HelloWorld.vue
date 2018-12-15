<template >
  <div class="page">
    <div class="amiamls">
      <div class="rabbit">
        <div class="ear-wrap clear">
          <div class="ear" id="ear1">
            <div class="litter-ear" id="litter-ear1"></div>
          </div>
          <div class="ear" id="ear2">
            <div class="litter-ear" id="litter-ear2"></div>
          </div>
        </div>
        <div class="eyes-wrap clear">
          <div class="eyes" id="eyes1">
            <div class="yanzhu" id="yanzhu1"></div>
            <div class="litter-yanjing" id="litter-yanjing1"></div>
          </div>
          <div class="eyes" id="eyes2">
            <div class="yanzhu" id="yanzhu2"></div>
            <div class="litter-yanjing" id="litter-yanjing2"></div>
          </div>
        </div>
        <!--<div class="mouth"></div>-->
        <!--<div class="huxu"></div>-->
        <div class="bizi"></div>
        <div class="mouth big-mouth">
          <div class="toungue"></div>
        </div>
        <div class="jiuwo-wrap clear">
          <div class="jiuwo" id="jiuwo1"></div>
          <div class="jiuwo" id="jiuwo2"></div>
        </div>
      </div>

      <div class="letter clear">
        <div class="clear">
          <div class="heart"></div>
          <div class="line1-box">
            <div class="text">小洋情书</div>
            <!--<div class="line orange"></div>-->
            <!--<div class="line gray"></div>-->
          </div>
        </div>
        <div class="line2-box">
          <div class="line2 orange"></div>
          <div class="line2 gray"></div>
          <div class="line2 orange"></div>
        </div>

        <router-link to="muban" class="circle-box">
          <div  class="circle-button">
            <span class="text">立即告白</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name:"Index"
    }
</script>

<style scoped lang="stylus">
  .page
    height: 100%;
    background: linear-gradient(#f7ab9e, #edc9c3);
    box-sizing border-box
    .amiamls
      position: absolute;
      width: 100%;
      /* height: 100%; */
      left: 50%;
      top: 50%;
      /* -webkit-transform: translate(-50%, -50%); */
      transform: translate(-50%, -55%);
      .rabbit
        position: relative;
        z-index: 999999;
        .ear-wrap

          .ear
            position relative
            width: 1.7rem;
            height: 1.3rem;
            background #e69a9a
          /* border-radius: 90% 50% 60% 60%; */
          /*animation earAnimation 5s infinite linear*/
          .litter-ear
            width: 0.8rem;
            height: 0.5rem;
            background: #d73d3d;
            border-radius: 1rem 1rem 0.4rem 0.4rem;
          #litter-ear1
            position: absolute;
            left: .6em;
            top: .6rem;
          #litter-ear2
            position: absolute;
            right: .6em;
            top: .6rem;
          #ear1
            float left
            margin-left 1rem
            border-radius: 1rem 1rem 0.4rem 0.4rem;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);


          #ear2
            float right
            margin-right 1rem
            border-radius: 1rem 1rem 0.4rem 0.4rem;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);

        .jiuwo-wrap
          .jiuwo
            width: 1.388888888888889rem;
            height: 1.3rem;
            background-color: #e69a9a;
            margin: auto;
            -webkit-transform: rotate(5deg);
            transform: rotate(5deg);
            z-index: 9999;
            margin-top 0.1rem
          #jiuwo1
            float left
            margin-left 1.2rem
            border-radius: 80% 80% 60% 60%;
          #jiuwo2
            float right
            margin-right 1.2rem
            border-radius: 80% 60% 70% 60%;
        .eyes-wrap

          .eyes
            position relative
            width: 1.2rem;
            height: 1.2rem;
            background: #825931;
            border-radius: 90% 90% 80% 80%;
            .yanzhu
              background: #fff;
              width: 0.3rem;
              height: 0.3rem;
              border-radius: 50%;
              position absolute
            .litter-yanjing
              background: #825931;
              width: 0.2rem;
              height: 0.2rem;
              border-radius: 50%;
              animation letterEye 2s infinite linear
              position absolute
            #litter-yanjing1
              bottom: .4rem;
              right: .2rem;
            #litter-yanjing2
              bottom: .4rem;
              left: .5rem;
            #yanzhu1
              bottom: .3rem;
              right: .2rem;
            #yanzhu2
              bottom: 0.3rem;
              left: 0.4rem;
          #eyes1
              float left
              margin-left 2.8rem
              margin-top 1rem
          #eyes2
            float right
            margin-right 2.8rem
            margin-top 1rem
        .huxu
          width: 0.1rem;
          height: 1rem;
          margin: 0 auto;
          /* margin-top: 3rem; */
          background: #ffb2c6;
        .bizi

          margin-left: -0.1rem;
          width: 0.2rem;
          height: 0.2rem;
          background: #e69a9a;
          margin: 0 auto;
          margin-bottom 0.5rem
          border-radius: 50%;

        .mouth
          background-color: #ec7977;
          overflow: hidden;
          -webkit-transform-origin: center top;
          transform-origin: center top;
          -webkit-animation: laugh 1.9s linear 0s infinite;
          animation: laugh 6s linear 0s infinite;
          width: 1rem;
          height: 1rem;
          margin-left: -0.4rem;
          border-radius: 0 0 50% 50%;
          -webkit-box-shadow: 2px 2px 0px 0px rgba(63,106,52,0.3);
          box-shadow: 2px 2px 0px 0px rgba(63,106,52,0.3);
          margin 0 auto
          .toungue
            width: 1rem;
            height: 1rem;
            background-color: #c71f1c;
            border-radius: 20px;
            position: absolute;
            top: 25px;
            right: 3px;

  .letter
    background: #fff;
    width: 7rem;
    height: 7rem;
    margin 0 auto;
    position relative
    top -0.4 rem
    z-index 999
    .line
      width: 3.2rem;
      height: 0.4rem;
      background: #f7ab9c;
      margin-bottom: 0.4rem;
      border-radius: 10px;
    .line2
      width: 80%;
      height: 0.4rem;
      margin: 0 auto;
      background: #f7ab9c;
      margin-bottom: 0.4rem;
      border-radius: 10px;
    .line2-box
      margin-top: 0.4rem;
    .line1-box
      float left
      text-align left
      margin-top 0.5rem
      margin-left 1rem
      .text
        font-size 0.7rem
        color #525252
    .heart
      float left
      margin-top: 0.4rem;
      margin-left: 0.6rem;
      background url("../assets/images/heart.png")
      width: 1.2rem;
      height: 1.2rem;
      background-size: 100%;
  .circle-button
    width: 3rem;
    height: 3rem;
    background: #c86e70;
    border-radius: 50%;
    font-weight: bold;
    z-index: 999999
    text-align center
    z-index: 999999;
    margin: 0 auto;
    color: #ffffff;
    -webkit-box-shadow: 0.2rem 0.18rem 0.8rem #a22f2f;
    /*box-shadow: 0.2rem 0.18rem 0.8rem #664e5e;*/
    -webkit-transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    -webkit-animation: gelatine 2s infinite;
    animation: gelatine 2s infinite;
    .text
      display: inline-block;
      font-size: 0.7rem;
      width: 2rem;
      margin-top: 0.5rem;
      font-size: 0.8rem;
      width: 2rem;
      margin-top: 0.4rem;
  .orange
    background #e69a9a !important
  .gray
    background #d5c2c2 !important
  @keyframes gelatine {

    0%{
      transform: scale(1, 1);
    }
    84%{
      transform: scale(1, 1);
    }
    85% {
      -webkit-transform: scale(0.9, 1.1);
      transform: scale(0.9, 1.1);
    }

    90% {
      -webkit-transform: scale(1.1, 0.9);
      transform: scale(1.1, 0.9);
    }

    95% {
      -webkit-transform: scale(0.95, 1.05);
      transform: scale(0.95, 1.05);
    }

    100%{
      transform: scale(1, 1);
    }


  }

  @keyframes earAnimation {
    0%{
      border-radius 0%
    }
    50%{
      border-radius 0%
    }
    75%{
      border-radius 100%

    }

    100%{
      border-radius 0%


    }
  }
  @keyframes laugh {
    0%{
      -webkit-transform: scale(0, 0);
      transform: scale(0, 0);
    }
    49%{
      -webkit-transform: scale(1, 0);
      transform: scale(1, 0);
    }
    50% {
      -webkit-transform: scale(1, 0);
      transform: scale(1, 0);
    }
    60% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    70% {
      -webkit-transform: scale(1, 0.6);
      transform: scale(1, 0.6);
    }
    80% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    90% {
      -webkit-transform: scale(1, 0.6);
      transform: scale(1, 0.6);
    }
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }
  @keyframes letterEye{
    0% {
      transform: translate(0rem,0rem);
    }
    20%{
      transform: translate(0.15rem,0.1rem);
    }
    40% {
      transform: translate(0rem,0rem);
    }
    60%{
      transform: translate(-0.15rem,-0.1rem);
    }
    70%{
      transform: translate(-0.15rem,0.1rem);
    }
  }

</style>