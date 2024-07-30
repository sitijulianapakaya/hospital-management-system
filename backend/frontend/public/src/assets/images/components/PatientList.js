import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchPatientsSuccess } from './actions/patientActions';

const PatientList = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.patients);

  useEffect(() => {
    axios.get('/api/patients')
      .then(response => dispatch(fetchPatientsSuccess(response.data)))
      .catch(error => console.error('There was an error fetching the patients!', error));
  }, [dispatch]);
