import React, { useState, useEffect } from 'react';
import  ContactForm  from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import css from './AppStyled.module.css';

export default function App  ()  {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const onFormSubmit = ({ id, name, number }) => {
    const contact = { id, name, number };
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const onFilter = (e) => {
    setFilter(e.target.value);
  };

  const onDeleteHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  const onFilterContacts = () => {
    if (filter) {
      return contacts.filter(
        (contact) =>
          contact.name.includes(filter) ||
          contact.name.toLowerCase().includes(filter)
      );
    } else {
      return contacts;
    }
  };
  
  return (
    <div className={css.container}>
      <span className={css.TitlePhonebook}>Phonebook</span>
      <ContactForm onSubmit={onFormSubmit} contacts={contacts} />
      <span className={css.ContactsTitle}>Contacts</span>
      <ContactFilter onFilter={onFilter} filter={filter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={onDeleteHandler}
        filterContacts={onFilterContacts}
      />
    </div>
  );
};


