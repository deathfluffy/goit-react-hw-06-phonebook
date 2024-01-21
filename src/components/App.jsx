import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import css from './AppStyled.module.css';
import { getContacts } from '../redux/Contact/ContactsSlice';
import { useSelector } from 'react-redux';
import Message from './Message/Message';

export default function App() {
  const contactsItems = useSelector(getContacts);
  return (
    <div className={css.container}>
      <span className={css.TitlePhonebook}>Phonebook</span>
      <ContactForm  contacts={contactsItems}/>
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
