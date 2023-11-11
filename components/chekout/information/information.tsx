'use client'
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import styles from './information.module.scss';

// Схема валидации для формы
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits')
        .required('Phone number is required'),
});

const Information = () => {
    return (
        <div className={styles.checkout_form}>
            <h2 className={styles.checkout_form__title}>CHECKOUT</h2>

            <Formik
                initialValues={{name: '', email: '', phoneNumber: ''}}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                <Form>
                    <h3 className={styles.form_title}>BILLING DETAILS</h3>

                    <div className={styles.form_group}>
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="div" className={styles.error}/>
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email"/>
                        <ErrorMessage name="email" component="div" className={styles.error}/>
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field name="phoneNumber" type="text"/>
                        <ErrorMessage name="phoneNumber" component="div" className={styles.error}/>
                    </div>

                    <button type="submit" className={styles.submit_button}>Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Information;
