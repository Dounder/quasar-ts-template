import { Module } from 'vuex';
import state, { ModuleStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { GlobalStateInterface } from 'src/store';

const exampleModule: Module<ModuleStateInterface, GlobalStateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default exampleModule;
