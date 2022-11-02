import { Link } from 'react-router-dom';

const ButtonLink = ({ id, children }) => {
  return (
    <Link
      to={`table/${id}`} className="btn btn-primary btn-sm" role="button">
      {children}
    </Link>
  );
};

export default ButtonLink