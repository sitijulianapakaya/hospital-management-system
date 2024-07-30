import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '', contact: '' });

  useEffect(() => {
    // Fetch doctors from API when component mounts
    axios.get('/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctors!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({
      ...newDoctor,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post new doctor to API
    axios.post('/api/doctors', newDoctor)
      .then(response => {
        setDoctors([...doctors, response.data]);
        setNewDoctor({ name: '', specialty: '', contact: '' });
      })
      .catch(error => {
        console.error('There was an error creating the doctor!', error);
      });
  };

  return (
    <div>
