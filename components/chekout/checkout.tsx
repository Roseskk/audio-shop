'use client'
import React from 'react';
import Information from "@/components/chekout/information/information";
import Summary from "@/components/chekout/summary/summary";

import styles from './checkout.module.scss';
import {FormikProvider} from "@/hooks/formikContext";

const Checkout = () => {
    return (
        <section className={styles.section_checkout}>
            <FormikProvider>
                <Information/>
                <Summary/>
            </FormikProvider>
        </section>
    )
}

export default Checkout;