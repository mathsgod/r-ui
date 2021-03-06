import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import RUI from "./index";

Vue.use(RUI);

new Vue({
    render: h => h(App),
}).$mount('#app')
