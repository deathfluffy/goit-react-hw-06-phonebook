import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import css from './ContactForm.module.css';


export default function ContactForm  ({ onSubmit, contacts })  {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  useEffect(() => {
    const nameInContacts = contacts.find(
      (contact) => contact.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (nameInContacts) {
      alert(`${formData.name} is already in contacts`);
    }
  }, [formData.name, contacts]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = formData;

    const contact = { id: nanoid(), name, number };
    onSubmit(contact);

    setFormData({ name: '', number: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={css.formContainer}>
      <form className={css.MainForm} autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <span className={css.FormLabel} htmlFor="name">
            Name
          </span>
          <div>
            <input
              className={css.InputField}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ]?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
        </div>
        <div>
          <span className={css.FormLabel} htmlFor="number">
            Number
          </span>
          <div>
            <input
              className={css.InputField}
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
        </div>
        <button className={css.addButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

