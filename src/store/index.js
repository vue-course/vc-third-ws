import Vue from "vue";
import Vuex from "vuex";

import boards from "./modules/boards";
import stages from "./modules/stages";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		boards,
		stages
	}
});