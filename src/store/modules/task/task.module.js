let initailState = [];

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

const getters = {
    getTasks: state => state
};

export default {
    state: initailState,
    mutations: {
        fetchTasks,
        addTask,
        editTask
    },
    actions: {
        fetchTasks: fetchTasksAction,
        addTask: addTaskAction,
        editTask: editTaskAction
    },
    getters
}