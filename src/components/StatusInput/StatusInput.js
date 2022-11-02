import { settings } from "../../settings/settings"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import styles from './StatusInput.module.scss';
import PropTypes from 'prop-types';

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

StatusInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default StatusInput;