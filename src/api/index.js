//当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from './mockAjax'
//三级联动接口
//api/product/getBaseCategoryList get无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList =()=>requests({url:'/product/getBaseCategoryList',method:'get'});

export const reqGetBannerList=()=>mockRequests.get('/banner');
export const reqFloorList=()=>mockRequests.get('/floor');

export const reqGetSearchInfo =(params)=>requests({url:'/list',method:'post',data:params});
export const reqGetCode=(phone)=>requests({url:'/user/passport/sendCode/${phone}',methods:'get'})
export const reqUserRegister=(data)=>requests({url:'/user/passport/register',data,methods:'post'})
export const reqUserLogin=(data)=>requests({url:'/user/passport/login',data,methods:'post'})