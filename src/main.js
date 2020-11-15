import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import VueKinesis from "vue-kinesis"
import vuetify from "./plugins/vuetify"
import "firebase/firebase"

Vue.use(VueKinesis)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
