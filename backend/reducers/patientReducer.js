// actionTypes.js
export const FETCH_PATIENTS_SUCCESS = 'FETCH_PATIENTS_SUCCESS';
export const ADD_PATIENT_SUCCESS = 'ADD_PATIENT_SUCCESS';
export const DELETE_PATIENT_SUCCESS = 'DELETE_PATIENT_SUCCESS';

// patientReducer.js
import { FETCH_PATIENTS_SUCCESS, ADD_PATIENT_SUCCESS, DELETE_PATIENT_SUCCESS } from './actionTypes';

const initialState = {
  patients: [],
};

