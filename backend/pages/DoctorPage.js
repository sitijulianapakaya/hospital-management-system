const DoctorPage = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors.doctors);
