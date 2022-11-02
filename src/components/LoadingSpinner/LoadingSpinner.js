import styles from './LoadingSpinner.module.scss';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <Spinner animation="border" role="status" className={styles.spinner} />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;