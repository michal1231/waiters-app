import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonLink = ({ id, children }) => {
  return (
    <Link
      to={`table/${id}`} className="btn btn-primary btn-sm" role="button">
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ButtonLink