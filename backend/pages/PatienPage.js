import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientPage = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({ name: '', age: '', contact: '', condition: '' });

  useEffect(() => {
    // Fetch patients from API when component mounts
    axios.get('/api/patients')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the patients!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({
      ...newPatient,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post new patient to API
    axios.post('/api/patients', newPatient)
      .then(response => {
        setPatients([...patients, response.data]);
        setNewPatient({ name: '', age: '', contact: '', condition: '' });
      })
      .catch(error => {
        console.error('There was an error creating the patient!', error);
      });
  };
