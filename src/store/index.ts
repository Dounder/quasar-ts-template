import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import { createStore, Store as VuexStore, useStore as vuexUseStore } from 'vuex';

import example from 'src/modules/example/store';
import { ModuleStateInterface } from 'src/modules/example/store/state';

export interface GlobalStateInterface {
  example: ModuleStateInterface;
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<GlobalStateInterface>> = Symbol('vuex-key');

export default store(function (/* { ssrContext } */) {
  const Store = createStore<GlobalStateInterface>({
    modules: {
      example,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}