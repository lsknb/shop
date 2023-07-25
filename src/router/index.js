//引入
import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Love from '@/pages/love'

//暴露并配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            name:"search",
            props:($route)=>({keyword:$route.params.keyword,k:$route.query.k})
        },
        {
            path:'/love',
            component:Love,
            meta:{show:true}
        },
        {
            path:'*',
            redirect:'/home',
        }
    ]
})