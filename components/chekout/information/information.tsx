'use client'
import React, {useEffect} from 'react';
import {Form, Formik} from 'formik';

import styles from './information.module.scss';
import {CheckoutSchema} from "@/schema/schema";
import CustomInput from "@/components/ui/form/customInput";
import BillingDetails from "@/components/chekout/information/billingDetails";
import ShippingInfo from "@/components/chekout/information/shippingInfo";
import PaymentDetails from "@/components/chekout/information/paymentDetails";
import {useFormikContext} from "@/hooks/formikContext";

const Information = () => {
    const {setForm} = useFormikContext();

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
                {(props) => {
                    useEffect(() => {
                        // setForm(props);
                    }, [props, setForm]);

                    return (
                        <Form>
                            <BillingDetails/>
                            <ShippingInfo/>
                            <PaymentDetails paymentType={props.values.paymentType}/>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default Information;
