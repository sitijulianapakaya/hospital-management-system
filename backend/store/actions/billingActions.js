export const addBilling = (billing) => async (dispatch) => {
  try {
    const response = await fetch('/api/billings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(billing)
    });
    const data = await response.json();
    dispatch(addBillingSuccess(data));
  } catch (error) {
    dispatch(addBillingFailure(error));
  }
};
