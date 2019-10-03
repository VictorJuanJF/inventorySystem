import Vue from 'vue'
import './plugins/vuetify'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import router from './router'
import store from './store'
// Importing the global css file
import "@/assets/css/customStyles.css"
// GLobal components
import './views/globalComponents/globalComponents';

// global axios
import './bootstrap';

//vee validate
import "./plugins/vee-validate";


Vue.config.productionTip = false

import Chartist from "chartist";
Vue.prototype.$Chartist = Chartist;

//plugins
import './plugins/formattedDate'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

new Vue({
    vuetify,
    router,
    data: {
        Chartist: Chartist
    },
    store,
    render: h => h(App)
}).$mount('#app')