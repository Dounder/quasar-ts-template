import { Module } from 'vuex';
import { GlobalStateInterface } from '../index';
import state, { ModuleStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<ModuleStateInterface, GlobalStateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default exampleModule;
