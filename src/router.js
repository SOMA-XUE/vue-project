import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/login.vue"
import User from "./views/User.vue"

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: '/user',
          component: User
        }
      ]
    }
  ]
});
