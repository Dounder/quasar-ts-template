import { ActionTree } from 'vuex';
import { GlobalStateInterface } from 'src/store';
import { ModuleStateInterface } from './state';

const actions: ActionTree<ModuleStateInterface, GlobalStateInterface> = {
  someAction ({commit}, payload) {
    commit('someMutation', payload);
  }
};

export default actions;
