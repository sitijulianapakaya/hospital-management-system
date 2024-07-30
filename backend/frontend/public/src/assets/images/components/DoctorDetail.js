import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios.get(`/api/doctors/${id}`)
      .then(response => setDoctor(response.data))
      .catch(error => console.error('There was an error fetching the doctor details!', error));
  }, [id]);

  if (!doctor) return <p>Loading...</p>;

  return (
    <div>
      <h1>Doctor Details</h1>
      <p>Name: {doctor.name}</p>
      <p>Specialty: {doctor.specialty}</p>
      <p>Phone: {doctor.phone}</p>
    </div>
  );
};

export default DoctorDetail;

