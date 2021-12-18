import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import vueMomnet from "vue-moment";
import { firestorePlugin } from "vuefire";
Vue.use(firestorePlugin);
Vue.use(vueMomnet);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
