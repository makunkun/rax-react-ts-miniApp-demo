import { createStore } from 'rax-app';
import user from './models/user';

const store = createStore({ user });

export default store;
