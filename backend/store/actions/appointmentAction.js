// Fetch appointments
export const fetchAppointments = () => async (dispatch) => {
  try {
    const appointments = await getAppointments();
    dispatch({
      type: FETCH_APPOINTMENTS_SUCCESS,
      payload: appointments
    });
  } catch (error) {
    dispatch({
      type: FETCH_APPOINTMENTS_FAILURE,
      payload: error.message
    });
  }
};
