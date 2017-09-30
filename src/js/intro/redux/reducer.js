import 'babel-polyfill';
import {combineReducers} from 'redux';

const initialState = {

};

function introStore(state = initialState, action) {
  let newVal = {};

  switch(action.type) {
    case 'test':
      return newVal;
    default:
      return state;
  }
}

const store = combineReducers({
  introStore,
});

export default store;
