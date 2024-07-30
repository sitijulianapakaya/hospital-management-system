const BillingList = () => {
  const dispatch = useDispatch();
  const bills = useSelector((state) => state.bills.bills);

  const [newBill, setNewBill] = useState({
    amount: '',
    date: '',
    patientName: '',
  });
