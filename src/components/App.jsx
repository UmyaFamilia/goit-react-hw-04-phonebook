import React, { useState, useEffect } from 'react';

import { ContactList } from './ContactList/ContactLIst';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

export function App() {
  let [contacts, setContacts] = useState([]);
  let [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setContacts((contacts = JSON.parse(localStorage.getItem('contacts'))));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addToFilter = word => {
    setFilter(word);
  };
  const deleteContact = id => {
    setContacts(prev => (contacts = prev.filter(contact => contact.id !== id)));
  };
  const findNecessary = filterQvery => {
    setFilter(
      prev =>
        (filter = prev.contacts.filter(e =>
          e.name.toLowerCase().includes(filterQvery.toLowerCase())
        ))
    );
  };
  const createContact = obj => {
    if (contacts.find(contact => contact.name === obj.name)) {
      alert(`${obj.name} is already in contacts.`);
      return;
    }
    let newObj = {
      ...obj,
      id: nanoid(),
    };
    setContacts(prev => {
      return (contacts = [newObj, ...prev]);
    });
  };
  const forContactList = () => {
    let array = [];
    filter
      ? (array = contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        ))
      : (array = contacts);
    return array;
  };

  return (
    <div className="container">
      <Form createContact={createContact} />
      <Filter findNecessary={findNecessary} addToFilter={addToFilter} />
      <ContactList contacts={forContactList()} delete={deleteContact} />
    </div>
  );
}
