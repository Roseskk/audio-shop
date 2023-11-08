'use client'
import React, {useState} from 'react';
import styles from './count.module.scss';

const CountBtn = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className={styles.count_wrapper}>
            <button className={styles.minus} onClick={() => setCount(prev => prev - 1)}>-</button>
            <button className={styles.count}>{count}</button>
            <button className={styles.plus} onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    )
}

export default CountBtn;