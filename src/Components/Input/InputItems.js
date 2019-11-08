import React from 'react';
import styles from './InputItems.module.css'

const inputItems=(props)=>(
    <div className='form-group'>
        <form className={styles.Form} onSubmit={props.submitList}>
            <input className={styles.Input} type='text'
            placeholder="Add Items" 
                value={props.value}
                onChange={props.change}
            />
            <button className='btn btn-success' type='submit'>ADD</button>

        </form>
       
    </div>
);

    


export default inputItems;
