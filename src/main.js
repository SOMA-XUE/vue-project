import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUi from "element-ui"

import 'element-ui/lib/theme-chalk/index.css';
import './assets/common.css'


Vue.config.productionTip = false;
Vue.use(ElementUi);

// 路由守卫
router.beforeEach((to,from,next) => {
  if(to.path === '/login') {
    next()
    return
  }

  if(localStorage.getItem('token')) {
    next()
  } else {
    next('/login')
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
