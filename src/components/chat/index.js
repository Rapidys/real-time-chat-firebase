import React, {useContext, useState} from 'react';
import s from './index.module.css'
import Messages from "./messages";
import FriendList from "./friendList";
import Button from "../button";
import {AuthContext} from "../../context/authContextProvider";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import Loader from "../loader";

const Chat = ({}) => {
    const mockData = [
        {id: 1, message: 'hei'},
        {id: 2, message: 'hei2'},
        {id: 3, message: 'hei3'},
        {id: 4, message: 'hei4'},
        {id: 5, message: 'hei5'},
        {id: 6, message: 'hei6'},
        {id: 7, message: 'hei6'},
        {id: 8, message: 'hei6'},
        {id: 9, message: 'hei6'},
        {id: 10, message: 'hei6'},
        {id: 11, message: 'hei6'},
    ]

    const friendList = [
        {id: 1, name: 'lado'},
        {id: 2, name: 'xvicha'},
        {id: 3, name: 'kvaracxelia'},
        {id: 4, name: 'asdasd'},
        {id: 5, name: 'sadfasdf'},
        {id: 6, name: 'sasdfas'},
    ]
    const {auth,fireStore,user} = useContext(AuthContext)

    const [value, setValue] = useState('')
    const [messages,loading] = useCollectionData(
        fireStore.collection('messages').orderBy('createdAt')
    )

    const handleChange = (e) => {
        setValue(e.target.value)
    }


    const sendMessage = () => {
       fireStore.collection('messages').add({
           uid:user.uid,
           displayName : user.displayName,
           photoURL:user.photoURL,
           text:value,
           createdAt:firebase.firestore.FieldValue.serverTimestamp()
       })
        setValue('')
    }

    return (
        <>
            <div className={s.wrapper}>
                <div style={{width: '100%',padding:'0 10px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
                        <h1>chat</h1>
                        <Button onClick={() => auth.signOut()}>
                            LOG OUT
                        </Button>
                    </div>
                    <div className={s.chatWrapper}>
                        {
                            loading
                                ? <Loader />
                                :<Messages messages={messages} user={user}/>
                        }
                    </div>
                    <div>
                        <textarea className={s.textArea}
                                  value={value}
                                  onChange={handleChange}
                                  placeholder={'message'}
                        >

                        </textarea>
                    </div>
                    <div>
                        <Button onClick={sendMessage}>
                            send
                        </Button>
                    </div>
                </div>


            </div>

        </>

    );
};

export default Chat;
