import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PatientDetail = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    axios.get(`/api/patients/${id}`)
      .then(response => setPatient(response.data))
      .catch(error => console.error('There was an error fetching the patient details!', error));
  }, [id]);
