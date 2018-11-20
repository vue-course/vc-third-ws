import {BoardsService} from "../../../services/boards-service";
import {MUTATIONS} from "./boards.mutations";

const boardService = new BoardsService();

export const ACTIONS = {
	FETCH_BOARDS: 'FETCH_BOARDS',
	SET_BOARD: 'SET_BOARD',
};

export const actions = {
	[ACTIONS.FETCH_BOARDS]: (context) => {
		return boardService
			.getBoards()
			.then(boards => context.commit(MUTATIONS.FETCH_BOARDS, boards));
	},
	[ACTIONS.SET_BOARD]: (context, board) => {
		return boardService
			.setBoard(board)
			.then(() => context.dispatch(ACTIONS.FETCH_BOARDS));
	}
};