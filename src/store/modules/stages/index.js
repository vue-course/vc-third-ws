import {actions} from "./stages.actions";
import {mutations} from "./stages.mutations";
import {getters} from "./stages.getters";

export default {
	state: {
		currentBoardId: null,
		currentTask: null,
		stages: []
	},
	mutations,
	actions,
	getters
}