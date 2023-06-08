import css from './contactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice';

const ContactList = () => {
  const filterValue = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const normalizedFilter = filterValue.toLowerCase();

  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  const elements = filterContactList.map(contact => (
    <li key={contact.id} id={contact.id} className={css.items}>
      <span className={css.span}>{contact.name}:</span>
      <span>{contact.number}</span>
      <button
        className={css.itemBtn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  ));
  return (
    <>
      {contacts.length > 0 ? (
        <ul>{elements} </ul>
      ) : (
        <h5 className={css.filterText}>Your phonebook is empty</h5>
      )}
    </>
  );
};

export default ContactList;
