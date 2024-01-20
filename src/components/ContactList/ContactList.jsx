import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getContacts } from '../../redux/Contact/ContactsSlice';
import { getFilter } from '../../redux/ContactFilter/ContactFilter';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export default function ContactList  ()  {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const getFilteredContacts = useMemo(() => () => {
    const normalizedFilter = filterValue.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filterValue]);

  const filteredContacts = getFilteredContacts();


  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};


