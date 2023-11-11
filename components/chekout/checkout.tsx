import React from 'react';
import Information from "@/components/chekout/information/information";
import Summary from "@/components/chekout/summary/summary";

import styles from './checkout.module.scss';

const Checkout = () => {
    return (
        <section className={styles.section_checkout}>
            <Information/>
            <Summary/>
        </section>
    )
}

export default Checkout;