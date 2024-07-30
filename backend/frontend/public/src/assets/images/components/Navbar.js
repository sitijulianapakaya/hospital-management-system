import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/medications">Medications</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/bills">Billing</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

