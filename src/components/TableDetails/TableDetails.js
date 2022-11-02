import Header from "../Header/Header";
import StatusInput from "../StatusInput/StatusInput";
import PeopleAmount from "../PeopleAmount/PeopleAmount";
import BillInput from "../BillInput/BillInput";
import { useParams } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { getTableById } from "../../Redux/subreducers/tablesReducer";
import { useState } from "react";
import { settings } from "../../settings/settings";
import { updateTableRequest } from "../../Redux/subreducers/tablesReducer";
import { useNavigate } from "react-router";

const TableDetails = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //initial table info
  const { tableId } = useParams();
  const { name, status, peopleAmount, maxPeopleAmount, bill } = useSelector(state => getTableById(state, parseInt(tableId)));

  //local states
  const [tableStatus, setTableStatus] = useState(status);
  const [tablePeopleAmount, setTablePeopleAmount] = useState(peopleAmount);
  const [tableMaxAmount, setTableMaxAmount] = useState(maxPeopleAmount);
  const [tableBill, setTableBill] = useState(bill);

  //options from settings
  const { free, busy, cleaning } = settings.statusOptions;

  //functions handling changes in inputs
  const statusChangeHandle = e => {
    setTableStatus(e.target.value);
    if (e.target.value === busy) {
      setTableBill(0);
    } else if (e.target.value === cleaning || e.target.value === free) {
      setTablePeopleAmount(0);
    }
  }

  const amountChangeHandle = e => {
    const parsedNumber = parseInt(e.target.value);
    setTablePeopleAmount(parsedNumber);
    if (parsedNumber > tableMaxAmount) {
      setTableMaxAmount(parsedNumber);
    }
  }

  const maxChangeHadnle = e => {
    const parsedNumber = parseInt(e.target.value);
    setTableMaxAmount(parsedNumber);
    if (parsedNumber < tablePeopleAmount) {
      setTablePeopleAmount(parsedNumber);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTableRequest({ id: tableId, status: tableStatus, peopleAmount: tablePeopleAmount, maxPeopleAmount: tableMaxAmount, bill: tableBill }));
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Header>{name}</Header>
      <StatusInput onChange={statusChangeHandle} value={tableStatus} />
      <PeopleAmount amountAction={amountChangeHandle} amountActionMax={maxChangeHadnle} value={tablePeopleAmount} valueMax={tableMaxAmount} />
      {tableStatus === busy ?
        <BillInput onChange={e => setTableBill(parseInt(e.target.value))} value={tableBill} /> : null}
      <button type="submit">Update</button>
    </form>
  );
};

export default TableDetails;