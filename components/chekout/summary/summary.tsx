'use client'
import React from 'react';
import styles from './summary.module.scss';
import {useFormikContext} from "@/hooks/formikContext";

const Summary = () => {
    const {form} = useFormikContext();

    const handleForm = () => {

        form?.submitForm()
            .then(() => {
                form?.validateForm().then((err) => {
                    if (Object.keys(err).length === 0) {
                        alert('Valid')
                    } else {
                        alert('Invalid')
                    }
                })
            })
    };

    return (
        <div className={styles.summary_section}>
            <h3 className={styles.summary_section__title}>SUMMARY</h3>
            <button className={`${styles.summary_btn} ${!form?.isValid ? styles.summary_disabled : ''}`}
                    disabled={!form?.isValid}
                    onClick={handleForm}>Submit
            </button>
        </div>
    )
}

export default Summary;
