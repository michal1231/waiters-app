import { settings } from "../../settings/settings"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import styles from './StatusInput.module.scss';

const StatusInput = ({ onChange, value }) => {
  const options = Object.values(settings.statusOptions);
  return (
    <Container className={styles.container}>
      <Form.Group >
        <Form.Label className={styles.label}>Status:</Form.Label>
        <Form.Select onChange={onChange} value={value} className={styles.select}>
          {options.map(option => <option key={option} value={option}>{option}</option>)}
        </Form.Select>
      </Form.Group>
    </Container >
  );
};

export default StatusInput;