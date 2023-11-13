import React from 'react';
import {useField} from 'formik';
import styles from './input.module.scss';

interface CustomInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string
}

const CustomInput: React.FC<CustomInputProps> = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className={styles.input_wrapper}>
            <div className={styles.label_wrapper}>
                <label className={meta.touched && meta.error ? styles.label_name_error : styles.label}>{label}</label>
                <span
                    className={meta.touched && meta.error ? styles.label_error : ''}>{meta.touched && meta.error ? meta.error : ''}</span>
            </div>
            <input className={meta.touched && meta.error ? styles.input_error : styles.input} {...field} {...props} />
        </div>
    );
};

export default CustomInput;
