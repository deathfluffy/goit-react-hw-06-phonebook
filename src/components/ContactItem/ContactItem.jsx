import propTypes from 'prop-types';
import css from './ContactItem.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) =>  {
  const dispatch = useDispatch();
  return (
    <div className={css.item}>
      <span>{name}:</span>
      <span>{number}</span>
      <button className={css.delButton} type="button" onClick={() => dispatch(deleteContact({id: id}))}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};