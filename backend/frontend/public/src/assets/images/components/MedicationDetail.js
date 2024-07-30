import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MedicationDetail = () => {
  const { id } = useParams();
  const [medication, setMedication] = useState(null);

  useEffect(() => {
    axios.get(`/api/medications/${id}`)
      .then(response => setMedication(response.data))
      .catch(error => console.error('There was an error fetching the medication details!', error));
  }, [id]);

  if (!medication) return <p>Loading...</p>;

  return (
    <div>
      <h1>Medication Details</h1>
      <p>Name: {medication.name}</p>
      <p>Description: {medication.description}</p>
      <p>Dosage: {medication.dosage}</p>
    </div>
  );
};

export default MedicationDetail;

