import ButtonLink from '../ButtonLink/ButtonLink';
import Container from 'react-bootstrap/Container';
import styles from './Table.module.scss';

const Table = ({ name, status, id }) => {
  return (
    <Container className={styles.container}>
      <div>
        <span className={styles.name}>{name}</span>
        <p className={styles.statusCheck}><span className={styles.status}>Status: </span>{status}</p>
      </div>
      <ButtonLink id={id}>Show more</ButtonLink>
    </Container>
  );
};

export default Table;