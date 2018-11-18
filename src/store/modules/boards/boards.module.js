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

const fetchStages = (state, payload) => {
    state = payload;
    return state;
};

const fetchStagesAction = (context, payload) => context.commit('fetchStages', payload);

const addStage = (state, payload) => {
    let newStage = {
        id: payload.newId,
        name: payload.task,
    };
    state.unshift(addStage)
};

const addStageAction = (context, payload) => context.commit('addStage', payload);

const fetchTasks = (state, payload) => {
    state = payload;
    return state;
};

const fetchTasksAction = (context, payload) => context.commit('fetchTasks', payload);

const addTask = (state, payload) => {
    let newTask = {
        id: payload.newId,
        task: payload.task,
        stage: payload.stage
    };
    state.unshift(newTask)
};

const addTaskAction = (context, payload) => context.commit('addTask', payload);

const editTask = (state, payload) => {
    const task = state.find(task => payload.id == task.id);
    task.task = payload.task;
};

const editTaskAction = (context, payload) => context.commit('editTask', payload);

export default {
    state: initailState,
    mutations: {
        fetchStages,
        addStage,
        fetchTasks,
        addTask,
        editTask
    },
    actions: {
        fetchStagesAction: fetchStages,
        addStageAction: addStage,
        fetchTasks: fetchTasksAction,
        addTask: addTaskAction,
        editTask: editTaskAction
    },
    getters: {
        getBoards: state => state,
        getStage: (id, state) => state.find(stage => stage.id === id),
        getStageTasks: (stageId, state) => state.find(stage => stage.id === id).tasks
    }
}