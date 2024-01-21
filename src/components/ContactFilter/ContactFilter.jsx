import { useDispatch, useSelector } from 'react-redux';
import css from './ContactFilter.module.css';
import { getFilter, setFilter } from '../../redux/ContactFilter/ContactFilter';

export default function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.currentTarget.value));
  };

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
          onChange={handleFilterChange}
          value={filter}
        />
      </div>
    </section>
  );
}
