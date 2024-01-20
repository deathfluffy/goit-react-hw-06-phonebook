import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/Contact/ContactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = () => {
    dispatch(removeContact(id));
  };

  return (
    <div className={css.item}>
      <span>{name}:</span>
      <span>{number}</span>
      <button className={css.delButton} type="button" onClick={handleRemoveContact}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
