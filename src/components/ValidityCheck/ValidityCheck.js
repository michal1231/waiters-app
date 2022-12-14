import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getTableById } from "../../Redux/subreducers/tablesReducer"
import { Navigate } from 'react-router-dom';
import TableDetails from "../TableDetails/TableDetails";

const ValidityCheck = () => {
  const { tableId } = useParams();
  const isTable = useSelector(state => getTableById(state, tableId));
  if (!isTable) return <Navigate to="/" />
  return (
    <TableDetails tableId={tableId} />
  );
};

export default ValidityCheck;