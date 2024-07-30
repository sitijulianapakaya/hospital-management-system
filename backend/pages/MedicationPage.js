import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MedicationPage = () => {
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({ name: '', dosage: '', frequency: '' });

  useEffect(() => {
    // Fetch medications from API when component mounts
    axios.get('/api/medications')
      .then(response => {
        setMedications(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the medications!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedication({
      ...newMedication,
      [name]: value
    });
  };
