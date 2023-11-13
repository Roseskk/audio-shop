'use client'
import React from 'react';
import {Form, Formik} from 'formik';

import styles from './information.module.scss';
import {CheckoutSchema} from "@/schema/schema";
import CustomInput from "@/components/ui/form/customInput";
import BillingDetails from "@/components/chekout/information/billingDetails";
import ShippingInfo from "@/components/chekout/information/shippingInfo";


const Information = () => {
    return (
        <div className={styles.checkout_form}>
            <h2 className={styles.checkout_form__title}>CHECKOUT</h2>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    zip: '',
                    city: '',
                    country: '',
                    paymentType: '',
                    number: '',
                    PIN: ''
                }}
                validationSchema={CheckoutSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form>
                        <BillingDetails/>
                        <ShippingInfo/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Information;
