 useEffect(() => {
    if (!bill) {
      // Fetch bill details from API if not available in the store
      axios.get(`/api/bills/${id}`)
        .then(response => {
          dispatch(fetchBillSuccess(response.data));
          setUpdatedBill({
            amount: response.data.amount,
            date: response.data.date,
            status: response.data.status,
          });
        })
