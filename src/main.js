import Vue from "vue";
import App from "./App.vue";
import {
  BootstrapVue,
  InputGroupPlugin,
  ListGroupPlugin,BadgePlugin
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.use(BootstrapVue);
Vue.use(InputGroupPlugin);
Vue.use(ListGroupPlugin);
Vue.use(BadgePlugin);


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
