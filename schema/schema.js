import * as Yup from 'yup';
import "yup-phone";

export const CheckoutSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    address: Yup.string(),
    zip: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),
    paymentType: Yup.string().required('You must select a payment method'),
    number: Yup.string().when('paymentType', (paymentType, schema) => {
        console.log(paymentType)
        return paymentType[0] === 'e-money'
            ? schema.required('Number is required for e-money payment method')
            : schema.notRequired();
    }),

    PIN: Yup.string().when('paymentType', (paymentType, schema) => {
        return paymentType[0] === 'e-money'
            ? schema.required('PIN is required for e-money payment method')
            : schema.notRequired();
    })
})