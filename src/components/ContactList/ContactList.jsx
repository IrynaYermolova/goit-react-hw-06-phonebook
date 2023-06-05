import css from './contactList.module.css';
import propTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  const elements = contacts.map(contact => (
    <li key={contact.id} id={contact.id} className={css.items}>
      <span className={css.span}>{contact.name}:</span>
      <span>{contact.number}</span>
      <button className={css.itemBtn} onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  ));
  return (
    <>
      {contacts.length > 0 ? (
        <ul>{elements} </ul>
      ) : (
        <h5 className={css.filterText}>
           Your phonebook is empty
        </h5>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  deleteContact: propTypes.func.isRequired,
};

export default ContactList;
