useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/appointments/${id}`);
        setAppointment(response.data);
      } catch (error) {
        console.error('Error fetching appointment detail:', error);
        setError('Failed to fetch appointment details.');
      } finally {
        setLoading(false);
      }
    };
