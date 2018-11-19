export const GETTERS = {
	STAGES: 'STAGES',
	CURRENT_BOARD_ID: 'CURRENT_BOARD_ID',
	CURRENT_TASK: 'CURRENT_TASK',
};

export const getters = {
	[GETTERS.STAGES]: state => state.stages,
	[GETTERS.CURRENT_BOARD_ID]: state => state.currentBoardId,
	[GETTERS.CURRENT_TASK]: state => state.currentTask,
};