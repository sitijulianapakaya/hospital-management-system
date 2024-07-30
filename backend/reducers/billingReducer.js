// store.js
import { createStore, combineReducers } from 'redux';
import billingReducer from './billingReducer';
import appointmentReducer from './appointmentReducer'; // jika Anda juga menggunakan appointmentReducer

const rootReducer = combineReducers({
  bills: billingReducer,
  // tambahkan reducer lainnya jika perlu
});

const store = createStore(rootReducer);

export default store;

