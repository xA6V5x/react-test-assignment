import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
     name: '',
     avatar: '',
});

export { useGlobalState, setGlobalState };
