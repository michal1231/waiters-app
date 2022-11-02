import styles from './Table.module.scss';
import { Link } from 'react-router-dom';

const Table = ({ name, status, id }) => {
  return (
    <div className={styles.table}>
      <span>{name}</span>
      <span>Status: {status}</span>
      <Link to={`table/${id}`}>Show more</Link>
    </div>
  );
};

export default Table;