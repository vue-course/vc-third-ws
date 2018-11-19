export const MUTATIONS = {
	SET_CURRENT_BOARD: 'SET_CURRENT_BOARD',
	SET_CURRENT_TASK: 'SET_CURRENT_TASK',
	SET_STAGES: 'SET_STAGES',
};

export const mutations = {
	[MUTATIONS.SET_CURRENT_BOARD]: (state, payload) => {
		state.currentBoardId = payload;
	},
	[MUTATIONS.SET_CURRENT_TASK]: (state, payload) => {
		state.currentTask = payload;
	},
	[MUTATIONS.SET_STAGES]: (state, payload) => {
		state.stages = payload;
	}
};