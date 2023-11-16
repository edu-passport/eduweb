import {defineStore} from 'pinia'

export default defineStore('user',{
    state(){
        return {
            showLogin:false,
            isLogin:false
        }
    }
})