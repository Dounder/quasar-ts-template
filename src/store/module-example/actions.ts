import { ActionTree } from 'vuex';
import { GlobalStateInterface } from '../index';
import { ModuleStateInterface } from './state';

const actions: ActionTree<ModuleStateInterface, GlobalStateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
