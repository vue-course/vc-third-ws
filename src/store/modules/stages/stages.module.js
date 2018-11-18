let initailState = [];

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

const getters = {
    getStages: state => state
};

export default {
    state: initailState,
    mutations: {
        fetchStages,
        addStage
    },
    actions: {
        fetchStagesAction: fetchStages,
        addStageAction: addStage,
    },
    getters
}