// src/store/store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer'; // rootReducer-i düzgün import edirik

const store = createStore(rootReducer);

export default store;

