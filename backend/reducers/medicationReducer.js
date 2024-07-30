// actionTypes.js
export const FETCH_MEDICATIONS_SUCCESS = 'FETCH_MEDICATIONS_SUCCESS';
export const ADD_MEDICATION_SUCCESS = 'ADD_MEDICATION_SUCCESS';
export const DELETE_MEDICATION_SUCCESS = 'DELETE_MEDICATION_SUCCESS';

// medicationReducer.js
import { FETCH_MEDICATIONS_SUCCESS, ADD_MEDICATION_SUCCESS, DELETE_MEDICATION_SUCCESS } from './actionTypes';

const initialState = {
  medications: [],
};

const medicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEDICATIONS_SUCCESS:
      return {
        ...state,
        medications: action.payload,
      };
    case ADD_MEDICATION_SUCCESS:
      return {
        ...state,
        medications: [...state.medications, action.payload],
      };
    case DELETE_MEDICATION_SUCCESS:
      return {
        ...state,
        medications: state.medications.filter(medication => medication.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default medicationReducer;

