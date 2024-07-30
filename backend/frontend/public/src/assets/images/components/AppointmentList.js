 useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (err) {
        setError('Failed to fetch appointments');
        console.error(err);
      }
    };
