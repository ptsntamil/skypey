import React from 'react';
import './MessageInput.css';
import store from '../../store';
import {setTypingValue, sendMessage, updateMessage} from '../../actions';

const MessageInput = ({value}) => {
    const state = store.getState();
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const {typing, activeUserId, activeMessageId} = state;
        if(activeMessageId) {
            store.dispatch(updateMessage(typing, activeMessageId, activeUserId));
        } else {
            store.dispatch(sendMessage(typing, activeUserId));
        }
        
    };
    
    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input className="Message__input" onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    );
}
export default MessageInput;