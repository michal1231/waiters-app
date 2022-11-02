import { settings } from "../../settings/settings";
import styles from './PeopleAmount.module.scss';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const PeopleAmount = ({ amountAction, amountActionMax, value, valueMax }) => {
  const minAmount = settings.minPeopleAmount;
  const maxAmount = settings.maxPeopleAmount;

  return (
    <Container className={styles.container}>
      <Form.Group>
        <Form.Label className={styles.label}>People:</Form.Label>
        <Form.Control type="number" value={value} onChange={amountAction} className={styles.peopleAmount} min={minAmount} max={maxAmount} />
        <span className={styles.slash}>/</span>
        <Form.Control type="number" value={valueMax} onChange={amountActionMax} className={styles.peopleAmount} min={minAmount} max={maxAmount} />
      </Form.Group>
    </Container>
  );
};

export default PeopleAmount;