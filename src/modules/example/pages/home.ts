import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';

export default defineComponent({
  name: 'home',
  setup() {
    const store = useStore();

    const text = computed({
      get: () => store.state.example.text,
      set: (value) => store.commit('example/someMutation', value),
    });

    return {
      text,

      changeText: () => {
        text.value = `changed ${Math.random().toFixed(2)}`;
      }
    };
  },
});
