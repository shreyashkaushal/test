import React from 'react';
import styles from './Item.module.css'

const item = (props) =>(
    <li className={styles.ul}>
        <h4>{props.title}</h4> 
    </li>
);
export default item;
