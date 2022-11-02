import Header from "../Header/Header";
import StatusInput from "../StatusInput/StatusInput";
import PeopleAmount from "../PeopleAmount/PeopleAmount";
import BillInput from "../BillInput/BillInput";
import { useSelector, useDispatch } from "react-redux";
import { getTableById } from "../../Redux/subreducers/tablesReducer";
import { useState } from "react";
import { settings } from "../../settings/settings";
import { updateTableRequest } from "../../Redux/subreducers/tablesReducer";
import { useNavigate } from "react-router";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const TableDetails = ({ tableId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //initial table info
  const { name, status, peopleAmount, maxPeopleAmount, bill } = useSelector(state => getTableById(state, tableId));

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
    <Container>
      <form onSubmit={handleSubmit}>
        <Header>{name}</Header>
        <StatusInput onChange={statusChangeHandle} value={tableStatus} />
        <PeopleAmount amountAction={amountChangeHandle} amountActionMax={maxChangeHadnle} value={tablePeopleAmount} valueMax={tableMaxAmount} />
        {tableStatus === busy ?
          <BillInput onChange={e => setTableBill(parseInt(e.target.value))} value={tableBill} /> : null}
        <Button variant="primary" type="submit">Update</Button>{' '}
      </form>
    </Container>
  );
};

TableDetails.propTypes = {
  tableId: PropTypes.number.isRequired,
}

export default TableDetails;