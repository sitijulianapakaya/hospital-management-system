import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchDoctorsSuccess } from './actions/doctorActions';

const DoctorList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors.doctors);

  useEffect(() => {
    axios.get('/api/doctors')
      .then(response => dispatch(fetchDoctorsSuccess(response.data)))
      .catch(error => console.error('There was an error fetching the doctors!', error));
  }, [dispatch]);

  return (
    <div>
      <h1>Doctor List</h1>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.specialty}
            <a href={`/doctors/${doctor.id}`}>Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;

