import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
const Main=()=>import("@/pages/Main");
const categoryEdit=()=>import("@/pages/categoryEdit");
const categoryList=()=>import("@/pages/categoryList");

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Main',
      name:'Main',
      component:Main,
      children:[
        {
          path:'/create',
          name:'categoryEdit',
          component:categoryEdit
        },
        {
          path:'/list',
          name:'categoryList',
          component:categoryList
        }
      ]
    }
  ]
})
