import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(7, "Too Short!").max(13, "Too Long!").required("Required")
});

        


export default function ContactForm({ onAdd }) {
        const nameFieldId = useId();
        const numberFieldId = useId();
    
        const handleSubmit = (values, actions) => {
            onAdd({
                id: nanoid(),
                name:values.name,
                number:values.number
            })
            actions.resetForm();
        }
    

    return (
        <Formik
           initialValues={{name: "", number: ""}}
           onSubmit={handleSubmit}
           validationSchema={FeedbackSchema}
        >
        
            <Form className={css.form}>
                <div>
                    <label className={css.text} htmlFor={nameFieldId}>Name</label>
                    <Field className={css.field} type="text" name="name"></Field>
                    <ErrorMessage className={css.error} name="name" component="span"/>
                </div>
                <div>
                    <label className={css.text} htmlFor={numberFieldId}>Number</label>
                    <Field className={css.field} type="tel" name="number"></Field>
                    <ErrorMessage className={css.error} name="number" component="span"/>
                </div>
            

            <button className={css.button}type="submit">Add contact</button>
          </Form>
        </Formik>
    )
}