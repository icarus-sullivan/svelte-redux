# svelte-reedux
A slim wrapper allowing the connection of redux in svelte SPAs. Inspired heavily by react-redux.


## Installation 
```bash
yarn add svelte-reedux 
// or
npm i --save svelte-reedux
```

## Usage
In your App.svelte or top-most level component wrap everything in the Provider component. 

_App.svelte_
```javascript
<script>
import { store } from './store';
import { Provider } from 'svelte-reedux';
</script>

<Provider store={store}>
  // your content
</Provider>
```

Any child component can now use hooks to access redux:

```javascript
<script>
import { useStore, useDispatch, useSelector } from 'svelte-reedux';

const store = useStore();
const dispatch = useDispatch();
const username = useSelector((s) => s.username || '');

const updateUsername = (e) => dispatch({
  type: 'UPDATE_USERNAME',
  value: `${e.target.value}`
});
</script>

<div>
You entered: {$username}
<input value={username} on:input={updateUsername}>
</div>
```
_Form.svelte_