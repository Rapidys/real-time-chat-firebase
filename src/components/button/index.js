import React from 'react';
import s from './index.module.css'

const Button = ({children,...props}) => {
    return (
        <button className={s.btn} {...props}>
            {children}
        </button>
    );
};

export default Button;
