import { GetterTree } from 'vuex';
import { GlobalStateInterface } from '../index';
import { ModuleStateInterface } from './state';

const getters: GetterTree<ModuleStateInterface, GlobalStateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
