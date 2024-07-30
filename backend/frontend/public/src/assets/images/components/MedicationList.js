 useEffect(() => {
    axios.get('/api/medications')
      .then(response => dispatch(fetchMedicationsSuccess(response.data)))
      .catch(error => console.error('There was an error fetching the medications!', error));
  }, [dispatch]);
