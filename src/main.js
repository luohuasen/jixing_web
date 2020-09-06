// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Home from "./Home";
import "./assets/css/thems.css";
import "./assets/css/responsive.css";
import "./assets/css/reset.css";
import "./assets/css/style.css";
Vue.use(ElementUI);
Vue.config.productionTip = false

// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
new Vue({
  el: '#app',
  router,
  render: h =>h(Home)
})
