import {BoardsService} from "../../../services/boards-service";
import {MUTATIONS} from "./stages.mutations";

const boardService = new BoardsService();

export const ACTIONS = {
	FETCH_STAGES: 'SET_STAGES',
	FETCH_TASK: 'FETCH_TASK',
	SET_STAGE: 'SET_STAGE',
	SET_TASK: 'SET_TASK',
};

export const actions = {
	[ACTIONS.FETCH_STAGES]: (context, boardId) => {
		if (boardId) {
			context.commit(MUTATIONS.SET_CURRENT_BOARD, boardId);
		}
		return boardService
			.getStages(context.state.currentBoardId)
			.then(stages => context.commit(MUTATIONS.SET_STAGES, stages));
	},
	[ACTIONS.FETCH_TASK]: (context, taskId) => {
		context.commit(MUTATIONS.SET_CURRENT_BOARD, null);
		return boardService
			.getTask(taskId)
			.then(task => context.commit(MUTATIONS.SET_CURRENT_TASK, task))
			.then(() => boardService.getStages(context.state.currentTask.board))
			.then((stages) => context.commit(MUTATIONS.SET_STAGES, stages))
	},
	[ACTIONS.SET_STAGE]: (context, stage) => {
		return boardService
			.setStage({...stage, board: context.state.currentBoardId})
			.then(() => context.dispatch(ACTIONS.FETCH_STAGES));
	},
	[ACTIONS.SET_TASK]: (context, task) => {
		return boardService
			.setTask(task)
			.then(task => {
				if (context.state.currentBoardId) {
					context.dispatch(ACTIONS.FETCH_STAGES);
				} else {
					context.commit(MUTATIONS.SET_CURRENT_TASK, task);
				}
			});
	}
};