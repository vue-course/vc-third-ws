import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './styles/main.scss';
import {BoardsServicePlugin} from "./services/boards-service-plugin";
import store from "./store";


Vue.use(BoardsServicePlugin);


Vue.config.productionTip = false;

new Vue({
	router,
    store,
	render: h => h(App)
}).$mount('#app');
