import React from 'react';
import styles from './information.module.scss';
import CustomInput from "@/components/ui/form/customInput";
import Image from "next/image";

import cash from '../../../assets/images/basket/cash.svg';

interface IProps {
    paymentType: string
}

const PaymentDetails: React.FC<IProps> = ({paymentType}) => {
    return (
        <section className={styles.section_payment}>
            <h4 className={styles.checkout_sub}>PAYMENT DETAILS</h4>
            <div className={styles.payment_wrapper}>
                <h5 className={styles.payment_title}>Payment Method</h5>
                <div className={styles.payment_btns}>
                    <CustomInput label='e-Money' name={'paymentType'} value='e-money' type={'radio'}/>
                    <CustomInput label='Cash on Delivery' name={'paymentType'} value='cash' type={'radio'}/>
                </div>
            </div>
            {
                !!paymentType
                    ? paymentType === 'e-money'
                        ? <div className={styles.eMoney}>
                            <CustomInput label='e-Money Number' name='number' placeholder='12353451'/>
                            <CustomInput label='e-Money PIN' name='PIN' placeholder='1234'/>
                        </div>
                        : <div className={styles.cash}>
                            <Image width={48} height={48} src={cash} alt={'cash'}/>
                            <p className={styles.text}>The ‘Cash on Delivery’ option enables you to pay in cash when our
                                delivery courier arrives at
                                your residence. Just make sure your address is correct so that your order will not be
                                cancelled.</p>
                        </div>
                    : null
            }
        </section>
    )
}

export default PaymentDetails;