import styles from './Header.module.scss';
import Container from 'react-bootstrap/Container';

const Header = ({ children }) => {
  return (
    <Container className={styles.container}>
      <h1 className={styles.header}>{children}</h1>
    </Container>
  );
};

export default Header;