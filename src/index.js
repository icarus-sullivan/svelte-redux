import { getContext } from 'svelte';
export { default as Provider } from './Provider.svelte';

export const useStore = () => getContext('@redux').store();

export const useDispatch = () => getContext('@redux').dispatch();

export const useSelector = (s) => getContext('@redux').selector(s);
