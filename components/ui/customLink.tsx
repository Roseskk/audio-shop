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
                type === 'glass' && <Link className={styles.custom_btn + ' ' + styles.glass} href={link}>{text}</Link>
            }

        </>
)}


export default CustomLink;