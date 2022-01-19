import { MutationTree } from 'vuex';
import { ModuleStateInterface } from './state';

const mutation: MutationTree<ModuleStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  }
};

export default mutation;
