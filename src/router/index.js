import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '@/components/page/login/login'
import orderListComponent from '@/components/page/orderList/orderList'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '/',
    component: loginComponent
  },
  {
    path: '*',
    redirect: loginComponent
  },
  {
    path: '/orderList',
    name: 'orderList',
    component: orderListComponent
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: homeComponent
  // }
]

const router = new Router({
  base: '/app/route',
  routes: routes
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // console.log(next);
  // if(localStorage.getItem('username') != null){
    next();
  // }else {
  //   if (to.path === '/login') { // 如果是登录页面的话，直接next()
  //     next();
  //   } else { // 否则 跳转到登录页面
  //     next({
  //       path: '/login',
  //       name: 'login',
  //       component: loginComponent
  //     });
  //   }
  // }
})

export default router
    // {
    //   path: '/list',
    //   name: 'list',
    //   component: list,
    //   children: [
    //     {
    //       path: '/blist',
    //       name: 'blist',
    //       component: blist
    //     },
    //     {
    //       path: '/clist',
    //       name: 'clist',
    //       component: clist
    //     }
    //   ]
    // },
    // {
    //   path: '/detail',
    //   name: 'detail',
    //   component: detail
    // }
