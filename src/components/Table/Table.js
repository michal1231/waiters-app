import styles from './Table.module.scss';

const Table = ({ name, status, id }) => {
  return (
    <div className={styles.table}>
      <span>{name}</span>
      <span>Status: {status}</span>
      <button>Show more</button>
    </div>
  );
};

export default Table;