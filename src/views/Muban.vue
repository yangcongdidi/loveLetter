<template>
    <div class="page2">
        <Back :title="title"></Back>
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide><img class="main-img" src="../assets/images/letter1.png"></swiper-slide>
            <swiper-slide><img class="main-img" src="../assets/images/letter2.png"></swiper-slide>
            <swiper-slide><img class="main-img" src="../assets/images/letter3.png"></swiper-slide>
            <swiper-slide><img class="main-img" src="../assets/images/letter4.png"></swiper-slide>
            <swiper-slide><img class="main-img" src="../assets/images/letter5.png"></swiper-slide>

        </swiper>
        <div to="/WriteLitter" class="submit_button" @click="selectLetter">确定</div>
        <div class="swiper-pagination"   id="pagination"></div>
    </div>
</template>

<script>
    import Back from '../components/Back'
    var activeIndex=0;
    export default {
        components:{
          Back
        },
        methods:{
            selectLetter(){
                console.log('你选择的信封是 '+activeIndex +'封');
                this.$store.commit('setLetter',activeIndex);
                this.$router.push({
                    name:'WriteLitter'
                })
            }
        },
        data () {
            return {
                title:'选择信封',
                activeIndex:0,
                swiperOption: {
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    watchSlidesProgress: !0,
                    pagination: ".swiper-pagination",
                    paginationClickable: !0,
                    paginationBulletRender: function (swiper, index, className) {
                        switch (index) {
                            case 0:
                                name = "龙猫";
                                break;
                            case 1:
                                name = "熊猫";
                                break;
                            case 2:
                                name = "小白";
                                break;
                            case 3:
                                name = "仓鼠";
                                break;
                            case 4:
                                name = "兔子";
                                break;
                            default:
                                name = ""
                        }
                        return '<span class="' + className + '"><i>' + name + '</i></span>';

                    },
                    onSlideChangeEnd : function(swiperHere) {
                        activeIndex =swiperHere.activeIndex
                    },
                    onProgress: function (a) {
                        var b, c, d,scale,es;
                        for (b = 0; b < a.slides.length; b++) c = a.slides[b], d = c.progress, scale = 1 - Math.min(Math.abs(.2 * d), 1),
                            es = c.style,
                            es.opacity = 1 - Math.min(Math.abs(d / 2), 1),
                            es.webkitTransform = es.MsTransform =
                            es.msTransform = es.MozTransform =
                            es.OTransform = es.transform =
                            "translate3d(0px,0," + -Math.abs(150 * d) + "px)"
                    },
                    onSetTransition: function (a, b) {
                        var es;
                        for (var c = 0; c < a.slides.length; c++) es = a.slides[c].style, es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + "ms"
                    }
                }
            }
        },
        mounted() {

        }
    }
</script>

<style >
    @import "../assets/css/swiper.min.css";
    @import "../assets/css/choumei.min.css";
</style>