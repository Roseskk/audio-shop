import React from 'react';
import styles from './header.module.scss';
import Navigation from "@/components/header/navigation";

const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation/>
            <div className={styles.header_bg}/>
        </header>
    )
}

export default Header;