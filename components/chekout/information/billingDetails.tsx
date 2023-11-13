import React from 'react';
import CustomInput from "@/components/ui/form/customInput";
import styles from './information.module.scss';

const BillingDetails = () => {
    return (
        <section className={styles.section_billing}>
            <h4 className={styles.checkout_sub}>BILLING DETAILS</h4>
            <div className={styles.billing_grid}>
                <CustomInput
                    label='Name'
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                />
                <CustomInput
                    label='Email'
                    name='email'
                    type='text'
                    placeholder='Enter your email'
                />
            </div>
            <div className={styles.billing_phone}>
                <CustomInput label='Phone number' name='phone' type='text' placeholder='+7 123 456 78 90'/>
            </div>
        </section>
    )
}

export default BillingDetails;