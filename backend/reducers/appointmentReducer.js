// store.js
import { createStore, combineReducers } from 'redux';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({
  appointments: appointmentReducer,
});

const store = createStore(rootReducer);

export default store;

