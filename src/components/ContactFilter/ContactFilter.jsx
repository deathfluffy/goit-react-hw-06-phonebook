// ContactFilter.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactFilter.module.css';
import { getFilter, setFilter } from '../../redux/ContactFilter/ContactFilter';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <section className={css.FilterSection}>
      <form className={css.FormLabel} htmlFor="filter">
        Find contacts by name
      </form>
      <div>
        <input
          className={css.inputfilter}
          type="text"
          name="filter"
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
          value={filter}
        />
      </div>
    </section>
  );
};

export default ContactFilter;
