import React from 'react';
import Divider from "@/components/ui/divider";

import styles from './aboutSlug.module.scss';

const AboutSlug = (props: { name: string }) => {
    return (
        <section className={styles.section_about__slug}>
            <Divider/>
            <h2 className={styles.text}>{props.name}</h2>
            <div className={styles.about_slug__bg}></div>
        </section>
    )
}

export default AboutSlug;