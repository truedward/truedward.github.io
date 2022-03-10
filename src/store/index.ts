import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import scroll from "./modules/scroll";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    scroll,
  },
});
