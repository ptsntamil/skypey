import {getMessages} from '../data/static-data';
import {actionTypes} from '../constants/actionTypes';
import _ from 'lodash';

const messages = (state = getMessages(10), actions) => {
    switch(actions.type) {
        case actionTypes.SEND_MESSAGE:
            let { message , userId } = actions.payload;
            let userMessages = state[userId];
            let number = +_.keys(userMessages).pop() + 1
            return {
                ...state,
                [userId]: {
                    ...userMessages,
                    [number]: {
                        number: number,
                        is_user_msg: true,
                        text: message
                    }
                }
            };
        case actionTypes.UPDATE_MESSAGE: 
            const {text} = actions.payload;
            userId = actions.payload.userId;
            userMessages = state[userId];
            number = actions.payload.number;          
            userMessages[number].text = text;
            return {
                ...state,
                [userId]: {
                    ...userMessages
                }
            };
        default:
            return state;
    }
};

export default messages;