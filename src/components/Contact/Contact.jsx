import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
    return (
        <div className={css.container}>
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
            <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}