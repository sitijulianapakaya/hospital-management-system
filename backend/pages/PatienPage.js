const PatientPage = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.patients);

  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    phone: '',
    address: ''
  });
