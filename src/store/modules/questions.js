

const questions = [];

const state = {
    questions: questions,
}


const getters = {
    questions: (state) => state.questions,

}

const actions = {
    addQuestion({ commit }, dt) {
        commit('addQues', dt);
    },
}

const mutations = {
    addQues: (state, dt) => {
        state.questions.push(dt)
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}