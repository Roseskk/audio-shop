'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

import styles from './breadcrumb.module.scss';

const Breadcrumb: React.FC = () => {
    const pathName = usePathname()
    const def = pathName.split('/')
    def.pop()
    const breadcrumb = def.join('/')
    return (
        <Link className={styles.breadcrumb} href={breadcrumb}>Go Back</Link>
    )
}
export default Breadcrumb;