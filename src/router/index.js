import Vue from "Vue";
import Router from "vue-router";
import Home from "../pages/home/Home";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
