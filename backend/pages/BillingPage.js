import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BillingPage = () => {
  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({ date: '', amount: '', description: '' });

  useEffect(() => {
    // Fetch bills from API when component mounts
    axios.get('/api/bills')
      .then(response => {
        setBills(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the bills!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBill({
      ...newBill,
      [name]: value
    });
  };
