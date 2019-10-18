import React from 'react';
import Item from './Item';
import styles from './List.module.css'



const list = (props) =>(
    <ul className={styles.List}>
    {
    props.list.map(value=>{
        return (
            <Item key={value.id} title={value.title} />

        )
    })
    }

   

        <button className={styles.Clear} type='button' onClick={props.clear}>CLEAR LIST</button>
    </ul>
);
export default list;
