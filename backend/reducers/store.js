// Menggabungkan semua reducer
const rootReducer = combineReducers({
  patients: patientReducer,
  medications: medicationReducer,
  doctors: doctorReducer,
  appointments: appointmentReducer,
  bills: billingReducer,
});
