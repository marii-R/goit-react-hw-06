import css from "./Contact.module.css";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}