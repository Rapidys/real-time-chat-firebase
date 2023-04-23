import React, {useContext} from 'react';
import TextField from "../fields/textField";
import useInput from "../../hooks/useInput";
import s from './index.module.css'
import Button from "../button";
import {AuthContext} from "../../context/authContextProvider";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Login = () => {

    const initialValues = {
        email: '',
        password: '',
        repeatPassword: ''
    }
    const validatedSchema = {
        email: {
            email: true,
            required: 'required field',
            notValid: 'ara validuri veli',
        },
        password: {
            required: 'required field password',
        },
        repeatPassword: {
            match: 'password',
            notValid: 'password dont match',
            required: 'required field password2',
        }
    }

    const {value, handleChange, handleFocus, handleBlur, error} = useInput(initialValues, validatedSchema)

    const {auth} = useContext(AuthContext)

    const handleLogin = async() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
    }


    return (
        <div className={s.wrapper}>
            <div className={s.inputWrapper}>
                <div className={s.inputs}>
                    <TextField
                        value={value.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={'E-mail'}
                        error={error.email?.hasError && error.email?.message}
                        style={{marginBottom: '10px'}}
                        name={'email'}
                    />
                    <TextField
                        value={value.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder={'Password'}
                        name={'password'}
                        error={error.password?.hasError && error.password?.message}
                        style={{marginBottom: '10px'}}
                    />
                    <TextField
                        value={value.repeatPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder={'repeat Password'}
                        name={'repeatPassword'}
                        error={error.repeatPassword?.hasError && error.repeatPassword?.message}
                        style={{marginBottom: '10px'}}
                    />
                </div>
                <div>
                    <Button onClick={handleLogin}>
                        LOG IN
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default Login;
