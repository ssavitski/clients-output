import Vue from 'vue';
import Vuex from 'vuex';

import clientsModule from './clients';

Vue.use(Vuex);

const state = {};

const store = new Vuex.Store({
  modules: {
    clientsModule,
  },
  state,
  getters: {

  },
  actions: {

  },
  mutations: {

  },
});

export default store;
