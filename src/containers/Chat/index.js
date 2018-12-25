import React from 'react';
import {setEditMessage} from '../../actions';
import store from '../../store';
import './Chat.css';

const Chat = ({ message }) => {
    const {text, is_user_msg, number} = message;
    const editMessage = text => {
        if(is_user_msg) {
            store.dispatch(setEditMessage(text, number, "dfsdf"))
        } else {
            store.dispatch(setEditMessage("", "", ""));
        }
    }
    return (
      <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} 
      onClick={editMessage.bind(null,text)}>
      {text}</span>
    );
};

export default Chat;