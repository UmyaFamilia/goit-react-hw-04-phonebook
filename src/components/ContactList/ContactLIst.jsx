import css from './ContactList.module.css';

import React from 'react';
export function ContactList(props) {
  return (
    <>
      <h4>Contacts:</h4>
      <ul>
        {props.contacts.map(a => (
          <li key={a.id} className={css.number}>
            {`name:  ${a.name} number:  ${a.number}`}
            <button onClick={() => props.delete(a.id)} className={css.button}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
