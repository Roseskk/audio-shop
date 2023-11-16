'use client'
import React, {ReactNode, useState} from 'react';
import {IHeader} from "@/types/types";
import Image from 'next/image';

import logo from '../../assets/images/header/audiophile.svg';
import Link from "next/link";

import styles from './navigation.module.scss';
import {usePathname} from "next/navigation";
import Basket from "@/components/basket/basket";
import ProductCards from "@/components/productCards/productCards";

type header = Partial<IHeader>

const navLinks: header[] = [
    {id: 1, title: 'HOME', href: '/'},
    {id: 2, title: 'HEADPHONES', href: '/products/headphones'},
    {id: 3, title: 'SPEAKERS', href: '/products/speakers'},
    {id: 4, title: 'EARPHONES', href: '/products/earphones'},
]

const Navigation = (props: { type?: string, children?: React.ReactNode }) => {
    const [burger, setBurger] = useState<boolean>(false)
    const pathname = usePathname()
    return (
        <nav className={`${styles.navigation} ${props.type === 'footer' ? styles.col : ''} }`}>
            <div className={styles.navigation_logo}>
                {
                    !props.type &&
                    <svg onClick={() => setBurger(prev => !prev)} className={styles.burger}
                         xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                         viewBox="0 0 16 15"
                         fill="none">
                        <rect width="16" height="3" fill="white"/>
                        <rect y="6" width="16" height="3" fill="white"/>
                        <rect y="12" width="16" height="3" fill="white"/>
                    </svg>
                }
                <Link href={'/'}>
                    <Image src={logo} alt={'logo'}/>
                </Link>
            </div>
            {
                !props.type &&
                <div className={`${styles.burger_menu} ${burger ? styles.burger_hide : styles.burger_menu}`}>
                    {props.children}
                </div>
            }
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
            {
                props.type === 'footer' && <ul className={styles.navigation_list_footer}>
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
            }
            {
                !props.type && <Basket/>
            }
        </nav>

    )
}

export default Navigation;