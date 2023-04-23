import React from 'react';
import s from './style.module.css'

const Loader = () => {
    return (
        <div className={s['wrapper']}>
            <div className={s['lds-default']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default Loader;
