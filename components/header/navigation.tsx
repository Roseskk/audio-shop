'use client'
import React from 'react';
import {IHeader} from "@/types/types";
import Image from 'next/image';

import logo from '../../assets/images/header/audiophile.svg';
import basket from '../../assets/images/header/basket.svg';
import Link from "next/link";

import styles from './navigation.module.scss';
import {usePathname} from "next/navigation";

type header = Partial<IHeader>

const navLinks: header[] = [
    {id: 1, title: 'HOME', href: '/'},
    {id: 2, title: 'HEADPHONES', href: '/products/headphones'},
    {id: 3, title: 'SPEAKERS', href: '/products/speakers'},
    {id: 4, title: 'EARPHONES', href: '/products/earphones'},
]

const Navigation = () => {
    const pathname = usePathname()
    return (
        <nav className={styles.navigation}>
            <Link href={'/'}>
                <Image src={logo} alt={'logo'}/>
            </Link>
            <ul className={styles.navigation_list}>
                {
                    navLinks.map((link) => (
                        <li key={link.id} className={styles.navigation_item}>
                            <Link className={styles.navigation_link} href={link.href!}>
                                <span
                                    className={pathname === link.href ? styles.navigation_link__title : ''}>{link.title!}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Link href={'/special/basket'}>
                <Image src={basket} alt={'basket'}/>
            </Link>
        </nav>

    )
}

export default Navigation;