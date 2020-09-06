import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/pages/Index";
import About from "../components/pages/About";
import Service from "../components/pages/Service";
import Product from "../components/pages/Product";
import News from "../components/pages/News";
import Contact from "../components/pages/Contact";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: '网站首页',
      component: Index,
      leaf: true,
      index: 1
    },
    {
      path: '/about',
      name: '关于吉星',
      component: About,
      leaf: true,
      index: 2
    },
    {
      path: '/work',
      name: '产品展示',
      index: 3,
      component: Product,
      leaf: true
    },
    {
      path: '/service',
      name: '服务介绍',
      component: Service,
      leaf: true,
      index: 4
    },
    {
      path: '/news',
      name: '行业知识',
      component: News,
      leaf: true,
      index: 5
    },
    {
      path: '/contact',
      name: '联系我们',
      component: Contact,
      leaf: true,
      index: 6
    }
  ]
})
