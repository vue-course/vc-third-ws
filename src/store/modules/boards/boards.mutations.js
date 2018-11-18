export const MUTATIONS = {
	FETCH_BOARDS: 'FETCH_BOARDS',
};

export const mutations = {
	[MUTATIONS.FETCH_BOARDS]: (state, payload) => {
		state.boards = payload;
	}
};