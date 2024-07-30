import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Healthcare Management System</h1>
      <p>Use the navigation links below to access different sections of the system:</p>
      <ul>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;

