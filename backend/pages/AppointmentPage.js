 useEffect(() => {
    // Fetch appointments from API on component mount
    axios.get('/api/appointments')
      .then(response => {
        dispatch(fetchAppointmentsSuccess(response.data));
      })
      .catch(error => {
        console.error('There was an error fetching the appointments!', error);
      });
  }, [dispatch]);
