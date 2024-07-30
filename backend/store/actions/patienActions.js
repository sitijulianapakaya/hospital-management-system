// Action creator untuk mengambil data pasien
export const fetchPatients = () => async (dispatch) => {
  try {
    const response = await fetch('/api/patients');
    const data = await response.json();
    dispatch({ type: FETCH_PATIENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PATIENTS_FAILURE, payload: error.message });
  }
};
