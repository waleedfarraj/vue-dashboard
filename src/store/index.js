import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const state = {
  widgetsArray: []
};

const actions = {
  getWidgetsArray({ commit }) {
    axios
      .get("https://run.mocky.io/v3/fd9db4dd-ada3-45c3-91b8-0abe418a7d28")
      .then(response => {
        commit("setData", response.data);
        //after getting the mocked data from the api we are commiting the mutation to change the state of widget array.
      });
  }
};

const mutations = {
  setData(state, widgetsArray) {
    state.widgetsArray = widgetsArray;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
