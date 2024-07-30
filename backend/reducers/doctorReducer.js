// store.js
import { createStore, combineReducers } from 'redux';
import doctorReducer from './doctorReducer';
import appointmentReducer from './appointmentReducer'; // jika Anda juga menggunakan appointmentReducer
import billingReducer from './billingReducer'; // jika Anda juga menggunakan billingReducer

const rootReducer = combineReducers({
  doctors: doctorReducer,
  appointments: appointmentReducer,
  bills: billingReducer,
  // tambahkan reducer lainnya jika perlu
});

const store = createStore(rootReducer);

export default store;

