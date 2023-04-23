import React from 'react';
import s from './field.module.css'

const TextField = ({...props}) => {
    return (
        <>
            {props.error && <label htmlFor="inp" className={s.error}>{props.error}</label>}
            <input id={'inp'} className={s.input} {...props}/>
        </>
    );
};

export default TextField;
