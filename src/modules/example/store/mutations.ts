import { MutationTree } from 'vuex';
import { ModuleStateInterface } from './state';

const mutation: MutationTree<ModuleStateInterface> = {
  someMutation (state: ModuleStateInterface, payload: string) {
    state.text = payload;
  }
};

export default mutation;
