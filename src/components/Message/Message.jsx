import PropTypes from 'prop-types';
import css from './Message.module.css';

export default function Message({ message }) {
  return <>{message && <p className={css.MessageText}>{message}</p>}</>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

