import ButtonLink from '../ButtonLink/ButtonLink';
import Container from 'react-bootstrap/Container';
import styles from './Table.module.scss';
import PropTypes from 'prop-types';

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

Table.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Table;