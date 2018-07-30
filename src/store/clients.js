import appService from './../app.service';

const state = {
  clients: [],
};

const getters = {

};

const actions = {
  fetchClients(context) {
    return new Promise(resolve => {
      appService.fetchClients().then(clients => {
        context.commit('setClients', clients);

        resolve();
      }).catch(error => {
        console.log('Can not fetch clients!', error);
      });
    });
  },
};

const mutations = {
  setClients(state, clients) {
    state.clients = clients;
  },
};

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations,
};
