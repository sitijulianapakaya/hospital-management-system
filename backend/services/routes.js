const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/appointments" element={<AppointmentPage />} />
      <Route path="/doctors" element={<DoctorPage />} />
      <Route path="/patients" element={<PatientPage />} />
      <Route path="/medications" element={<MedicationPage />} />
      <Route path="/billing" element={<BillingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
