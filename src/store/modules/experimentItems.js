import axios from "axios";

const state = {
    experimentItems: [],
};
const getters = {
    allExperiments: (state) => state.experimentItems,
};
const actions = {
    async fetchExperiments({ commit }) {
        const response = await axios.get(
            process.env.VUE_APP_BACKEND + process.env.VUE_APP_BACKEND_EXPERIMENT_LIST
        );

        var all_experiments = response.data["all_experiments"]
        commit('setExperimentList', all_experiments);
    },
};
const mutations = {
    setExperimentList: (state, experimentItems) => (state.experimentItems = experimentItems)
};

export default {
    state,
    getters,
    actions,
    mutations,
};