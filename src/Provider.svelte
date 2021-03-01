<script>
  import { setContext } from 'svelte';
  import { readable, derived } from 'svelte/store';
  
  export let store;
  
  const state = readable(
    store.getState(), 
    (set) => 
      store.subscribe(() => set(store.getState())
    )
  );

  setContext('@redux', {
    store: () => store,
    dispatch: () => store.dispatch,
    selector: (selector) => derived(
      state,
      ($state) => selector($state)
    )
  });
</script>

<slot />