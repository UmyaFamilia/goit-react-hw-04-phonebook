import React, { useState } from 'react';
import css from './Form.module.css';

export function Form({ createContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleWrite = ({ target: { value, name } }) => {
    console.log(value);
    console.log(name);
    if (name === 'userName') {
      setName(value);
    }
    if (name === 'userNumber') {
      setNumber(value);
    }
  };

  const handleClick = e => {
    e.preventDefault();

    createContact({ name, number });
  };

  return (
    <div className={css.formCover}>
      <form onSubmit={handleClick} className={css.form}>
        <label htmlFor="name">name</label>
        <input
          className={css.inpute}
          type="text"
          name="userName"
          onChange={handleWrite}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="number">number</label>
        <input
          className={css.inpute}
          type="tel"
          name="userNumber"
          onChange={handleWrite}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add Contacs</button>
      </form>
    </div>
  );
}
