import { BoardsService } from "../../../services/boards-service";
const boardService = new BoardsService();

let initailState = [{
    id: 1,
    stages: [ {
        id: 2,
        name: 'stage name',
        parentId: 1,
        tasks: [
            {
                id: 3,
                task: 'do something',
                parentId: 2
            }
        ]
    }]
}];

const fetchBoards = (state, payload) => {
    state = payload;
    return state;
};

const fetchBoardsAction = (context) => {
    const boards = boardService.getBoards()
        .then(boards =>  context.commit('fetchBoards', boards));
};

export default {
    state: initailState,
    mutations: {
        fetchBoards
    },
    actions: {
        fetchBoardsAction: fetchBoardsAction,
    },
    getters: {
        getBoards: state => state,
    }
}