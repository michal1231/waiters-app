import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from './BillInput.module.scss';
import PropTypes from 'prop-types';

const BillInput = ({ onChange, value }) => {
  return (
    <Container className={styles.container}>
      <Form.Group>
        <Form.Label className={styles.label}>Bill:</Form.Label>
        <span className={styles.currencyIcon}>$</span>
        <Form.Control type="number" value={value} onChange={onChange} className={styles.numberInput} />
      </Form.Group>
    </Container>
  );
};

BillInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

export default BillInput;