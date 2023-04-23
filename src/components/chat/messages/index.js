import React from 'react';
import s from '../index.module.css'
const Messages = ({messages,user}) => {
    return (
        <>
            {messages.map((item,index) => {
                return (
                    <div className={s.message} style={{
                        marginLeft:user.uid === item.uid ? 'auto' : '10px',
                        border:user.uid === item.uid ? '1px solid #212020' : '1px solid #d75858'
                    }} key={index}>
                        <div className={s.avatar}>
                            <img src={item.photoURL} alt="#" style={{width:40,height:40,borderRadius:'50%'}} referrerPolicy="no-referrer"/>
                            <div>
                                {item.displayName}
                            </div>
                        </div>
                        <div style={{
                            maxWidth: '260px',
                            wordWrap: 'break-word',
                            margin:'10px',
                        }}>
                            {item.text}
                        </div>
                        <div>
                            {/*{item.createdAt}*/}
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Messages;
