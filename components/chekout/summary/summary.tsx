'use client'
import React from 'react';
import styles from './summary.module.scss';
import {useFormikContext} from "@/hooks/formikContext";

const Summary = () => {
    const {form} = useFormikContext();

    return (
        <div className={styles.summary_section}>
            <h3 className={styles.summary_section__title}>SUMMARY</h3>
            <button onClick={() => form?.submitForm()}>Submit</button>
        </div>
    )
}

export default Summary;
