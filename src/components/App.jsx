import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import css from './AppStyled.module.css';
import { getContacts, addContact } from '../redux/Contact/ContactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Message from './Message/Message';

export default function App() {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContacts);
  const onFormSubmit = ({ id, name, number }) => {
    const contact = { id, name, number };
    dispatch(addContact(contact));
  };
  return (
    <div className={css.container}>
      <span className={css.TitlePhonebook}>Phonebook</span>
      <ContactForm onSubmit={onFormSubmit} contacts={contactsItems}/>
      <span className={css.ContactsTitle}>Contacts</span>
      {contactsItems && contactsItems.length !== 0 ? (
        <>
          <ContactFilter />
          <ContactList />
        </>
      ) : (
        <Message message="There are no contacts in your phonebook. Please add your first contact!" />
      )}
    </div>
  );
}
