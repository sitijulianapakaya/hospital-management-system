import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({ date: '', time: '', description: '' });

  useEffect(() => {
    // Fetch appointments from API when component mounts
    axios.get('/api/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the appointments!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({
      ...newAppointment,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post new appointment to API
    axios.post('/api/appointments', newAppointment)
      .then(response => {
        setAppointments([...appointments, response.data]);
        setNewAppointment({ date: '', time: '', description: '' });
      })
      .catch(error => {
        console.error('There was an error creating the appointment!', error);
      });
  };

  return (
    <div>
      <h1>Appointments</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={newAppointment.date} onChange={handleInputChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={newAppointment.time} onChange={handleInputChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newAppointment.description} onChange={handleInputChange} required />
        </label>
        <button type="submit">Add Appointment</button>
      </form>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} at {appointment.time}: {appointment.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentPage;

