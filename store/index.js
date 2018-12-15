import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



const store = new Vuex.Store({
    state: {
        letter: 0,
        content:'',
        recipients:'',
        phone:'',
        address:'',
        date:''

    },
    mutations: {
        setLetter (state,name) {
            state.letter=name
        },
        setContent(state,content) {
            state.content=content
        },
        setRecipients(state,recipients) {
            state.recipients=recipients
        },
        setPhone(state,phone) {
            state.phone=phone
        },
        setAddress(state,address) {
            state.address=address
        },
        setDate(state,date) {
            state.date=date
        },
    }
})

export default store;