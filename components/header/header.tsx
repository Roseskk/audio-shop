'use client'
import React from 'react';
import styles from './header.module.scss';
import Navigation from "@/components/header/navigation";
import {usePathname} from "next/navigation";

const Header = (props: { children: React.ReactNode }) => {
    const pathName = usePathname()
    return (
        <header className={pathName !== '/' ? styles.header_alternative : styles.header}>
            <Navigation/>
            <div className={pathName !== '/' ? styles.header_bg__alternative : styles.header_bg}/>
        </header>
    )
}

export default Header;