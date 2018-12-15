<template>
    <div class="page">
        <div class="group">
            <div  class="intro">收件人:</div>
            <div><input @blur="vailUserName" v-model="recipient" type="text" placeholder="请输入收件人"></div>
            <div><input @blur="vailUserName" v-model="username" type="text" placeholder="请输入收件人"></div>
        </div>
        <div class="group">
            <div  class="intro">手机号码:</div>
            <div><input @blur="vailPhone" v-model="phone" type="text" placeholder="请输入收件人手机号码"></div>
        </div>
        <div class="group">
            <div  class="intro">地址:</div>
            <div><input @blur="vailAddress" v-model="address" type="text" placeholder="请输入地址"></div>
        </div>
        <div class="group">
            <div  class="intro">寄件人的微信:</div>
            <div><input @blur="vailAddress" v-model="wechat" type="text" placeholder="(填写微信或QQ)代写的情书发到你的微信"></div>
        </div>
        <div class="group" >
            <div  class="intro">送信日期:</div>
            <!--<div><input v-model="date" type="text" placeholder="请选择送信日期"></div>-->
            <date-picker field="myDate"
                         placeholder="选择日期"
                         v-model="date"
                         format="yyyy/mm/dd"
                         :backward="false"
                         :no-today="true"
                         :forward="true"></date-picker>
        </div>
        <div class="button" @click="Dispatch">
            确定
        </div>
    </div>
</template>

<script>
    import myDatepicker from 'vue-datepicker-simple/datepicker-2.vue'; //引入对应的组件
    import axios from '../util/request'
    export default {
        name: "DispatchView",
        components:{
            'date-picker': myDatepicker
        },
        data(){
            return {
                recipient:'',
                phone:'',
                address:'',
                date:"",
                dispatch:true,
                username:'',
                phone:'',
                address:'',
                date:"",
                wechat:''
            }
        },
        methods:{
            Dispatch() {
                if(this.vailUserName()==true && this.vailPhone()==true && this.vailAddress()==true && this.vailDate()==true ){
                    this.$store.commit('setRecipients',this.recipient)
                    this.$store.commit('setPhone',this.phone)
                    this.$store.commit('setAddress',this.address)
                    this.$store.commit('setDate',this.date)
                    this.$tips.show("成功,稍后我将会加你的微信", {
                        delay: 3000
                    })
                    axios.post('/users/setDispatch', {
                        content: this.$store.state.content,
                        recipients: this.recipient,
                        recipientPhone:this.phone,
                        address:this.address,
                        date:this.date,
                        dispatch: this.dispatch,
                        wechat:this.wechat
                    }).then(function (response) {
                        console.log(response);
                    })

                    // console.log(this.$store.state.recipients)
                    // console.log(this.$store.state.phone)
                    // console.log(this.$store.state.address)
                    // console.log(this.$store.state.date)

                };
            },
            vailUserName(){
                if(this.username==''){
                    this.$tips.show("收件人不能为空", {
                        delay: 2000
                    })
                    return false
                }
                return true
            },
            vailPhone(){
                var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                if(this.phone==''){
                    this.$tips.show("手机不能为空", {
                        delay: 2000
                    })
                    return false
                }else if(!myreg.test(this.phone)){
                    this.$tips.show("请输入正确的手机号码", {
                        delay: 2000
                    })
                    return false
                }
                return true
            },
            vailAddress(){
                if(this.address==''){
                    this.$tips.show("地址不能为空", {
                        delay: 2000
                    })
                    return false
                }
                return true
            },
            vailDate(){
                if(this.date==''){
                    this.$tips.show("日期不能为空", {
                        delay: 2000
                    })
                    return false
                }
                return true
            },
        }
    }
</script>

<style scoped lang="stylus">
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    white;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    white;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    white;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:    white;
}

input
    background none !important
    border 0 !important


.page
    height: 100%;
    background: #c86e70;
    padding-top 1.3rem
    .group
        width 8rem
        border-bottom 2px solid white
        margin 0 auto
        margin-bottom 0.8rem
        .intro
            font-size 0.6rem
            color white
            text-align left
        input
            display block
            height 0.6rem
            width: 100%;
            border: 0;
            background: none;
            outline: none;
            color: white;
            font-size: 0.4rem;
            line-height 1rem
    .button
        margin-top: 0.3rem;
        font-size: 0.5rem;
        border-radius: 0.1rem;
        padding: 0rem 0.8rem;
        border: 2px solid #df1913;
        display: inline-block;
        color: #f10e0e;
</style>