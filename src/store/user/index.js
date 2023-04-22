import {reqGetCode,reqUserRegister,reqUserLogin}from "@/api"
const state = {
    code:""
};
const mutations = {
    GETCODE(state,code){
        state.code=code
    }
};
const actions = {
    async getCode({commit},phone){
        let result=await reqGetCode(phone);
        if(result.code==200){
            commit("GETCODE",result.data)
        }
    },
    async userRegister({commit},user){
        let result=await reqUserRegister(user);
        if(result.code==201){
            return 'ok'
        }
    },
    async userLogin({commit},user){
        let result=await reqUserLogin(user);
        if(result.code==201){
            return 'ok'
        }
    },
};
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}