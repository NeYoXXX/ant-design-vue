import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* 
  使用es6导入自动带有摇树功能，css也可以单独引用，但是每使用一个组件就需要单独引用，及其不方便
  所以建议使用插件 babel-plugin-import，按需加载
*/
import { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;

Vue.use(Button);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
