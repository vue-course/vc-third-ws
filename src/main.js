import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './styles/main.scss';
import {BoardsServicePlugin} from "./services/boards-service-plugin";


Vue.use(BoardsServicePlugin);


Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
