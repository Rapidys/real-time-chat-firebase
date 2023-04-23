import React from 'react';
import s from "../index.module.css";

const FriendList = ({friends}) => {
    return (
        <>
            {friends.map(item => {
                return (
                    <div className={s.friendList} key={item.id}>
                        {item.name}
                    </div>
                )
            })}
        </>
    );
};

export default FriendList;
