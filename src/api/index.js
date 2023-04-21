//当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from './mockAjax'
//三级联动接口
//api/product/getBaseCategoryList get无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList =()=>requests({url:'/product/getBaseCategoryList',method:'get'});

export const reqGetBannerList=()=>mockRequests.get('/banner');
export const reqFloorList=()=>mockRequests.get('/floor');

export const reqgetSearchInfo =(parmas)=>requests({url:'/list',method:'post',data:parmas});