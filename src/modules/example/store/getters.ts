import { GetterTree } from 'vuex';
import { GlobalStateInterface } from 'src/store';
import { ModuleStateInterface } from './state';

const getters: GetterTree<ModuleStateInterface, GlobalStateInterface> = {
  someGetter(state) {
    return state.text;
  },
};

export default getters;
