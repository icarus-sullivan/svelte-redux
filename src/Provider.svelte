<script>
  import { setContext } from 'svelte';
  import { readable, derived } from 'svelte/store';
  
  export let store;
  
  const state = readable(store.getState(), (set) => {
    let run = true;
    store.subscribe(() => {
      if (run) set(store.getState());
    });
    return () => {
      run = false;
    };
  });

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