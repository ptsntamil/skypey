import React from "react";
import store from '../../store';
import Header from '../../components/Header';
import Chats from '../../components/Chats';
import MessageInput from '../MessageInput';
import _ from 'lodash';
import './ChatWindow.css';

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts.contacts[activeUserId];
    const messages = state.messages[activeUserId];
    const {typing} = state;
  return (
    <div className="ChatWindow">
        <Header activeUser={activeUser} />
        <Chats messages={_.values(messages)} />
        <MessageInput value={typing}/>
    </div>
  );
};
export default ChatWindow;