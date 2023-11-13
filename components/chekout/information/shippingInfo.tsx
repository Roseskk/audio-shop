import React from 'react';
import CustomInput from "@/components/ui/form/customInput";
import styles from './information.module.scss';

const ShippingInfo = () => {
    return (
        <section className={styles.section_shipping}>
            <h4 className={styles.checkout_sub}>SHIPPING INFO</h4>
            <div>
                <CustomInput label='Address' name='address' placeholder='112233 Your address'/>
            </div>
            <div className={styles.zip}>
                <CustomInput label='ZIP Code' name='zip' placeholder='111000'/>
                <CustomInput label='City' name='city' placeholder='Astana'/>
            </div>
            <div className={styles.country}>
                <CustomInput label='Country' name='country' placeholder={'KZ'}/>
            </div>
        </section>
    )
}

export default ShippingInfo;