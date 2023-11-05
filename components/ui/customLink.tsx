import React from 'react';
import Link from "next/link";
import styles from './customBtn.module.scss';

interface Props {
    link: string
    type: 'transparent' | 'default' | 'glass';
    text: string
}

const btnObject = {
    transparent: 'transparent',
    default: 'default',
    glass: 'glass'
}

const CustomLink: React.FC<Props> = ({link, type, text}) => {
    return(
        <>
            {
                type === 'transparent' && <Link className={styles.custom_btn + ' ' + styles.transparent} href={link}>{text}</Link>
            }
            {
                type === 'default' && <Link className={styles.custom_btn + ' ' + styles.default} href={link}>{text}</Link>
            }
            {
                type === 'glass' && <Link className={styles.custom_btn + ' ' + styles.glass} href={link}>
                <span>
                    {text}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" strokeWidth="2"/>
                </svg>
                </Link>
            }
        </>
)}


export default CustomLink;