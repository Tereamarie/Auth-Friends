import React, { useState, useEffect } from 'react';
import { axiosAuth } from '../utilities/axiosAuth';
import Friend from './Friend.js';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    console.log("friends", friends)

    useEffect(() => {
        getFriends();
    }, [])


    const getFriends = () => {
        axiosAuth().get("/friends")
            .then(res => {
                console.log(res);
                setFriends(res.data)})
            .catch(err => console.log(err));
    }

    return (
        <div className="friends-list">
            {friends.map((friend, id) =>
            <Friend key={id} 
                    name={friend.name} 
                    age={friend.age} 
                    email={friend.email}/>)}  
                   
        </div> 
    );
}

export default Friends; 
