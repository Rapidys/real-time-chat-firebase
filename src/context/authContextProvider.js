import React, {createContext, useEffect, useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const AuthContext = createContext({
    auth:undefined,
    fireStore:undefined,
    firebase:undefined,
})

const AuthContextProvider = ({children}) => {




    const firebaseConfig = {
        apiKey: "AIzaSyDc_s2BiTv1udegBl3TsZNkAa3-zuoXk2s",
        authDomain: "real-time-chat-3d290.firebaseapp.com",
        projectId: "real-time-chat-3d290",
        storageBucket: "real-time-chat-3d290.appspot.com",
        messagingSenderId: "740292017529",
        appId: "1:740292017529:web:f2fb53222f08a737fa43a8",
        measurementId: "G-RTJNXL5ETZ"
    };
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth()
    const fireStore = firebase.firestore()

    const [user,loading,error] = useAuthState(auth)


    console.log(auth)

    return (
        <AuthContext.Provider
          value = {{
              fireStore,
              firebase,
              user,
              auth,
              loading,
              error
          }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
