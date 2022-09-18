import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

// 就好比将类注入到spring的容器中
import {postKeyValueRequest} from "@/utils/api";
import {postRequest} from "@/utils/api";
import {getRequest} from "@/utils/api";
import {putRequest} from "@/utils/api";
import {delRequest} from "@/utils/api";

Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.delRequest = delRequest;


Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
