import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import FastClick from "fastclick";
import "./assets/styles/reset.css";
import "./assets/styles/border.css";
Vue.config.productionTip = false;
FastClick.attach(document.body);
new Vue({
  router,
  comments: { App },
  render: (h) => h(App)
}).$mount("#app");
