import { createStore } from 'redux';
import reducer from './reducer';

const state = {
  lang: 'redux'
}

const store = createStore(reducer, state);

export default store;