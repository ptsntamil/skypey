import { actionTypes} from "../constants/actionTypes";

export const setActiveUserId = id => ({
  type: actionTypes.SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
    type: actionTypes.SET_TYPING_VALUE,
    payload: value
});

export const sendMessage = (message, userId) => ({
    type: actionTypes.SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});

export const setEditMessage = (text, number, userId) => ({
    type: actionTypes.EDIT_MESSAGE,
    payload: {
        text,
        number,
        userId
    }
});

export const updateMessage = (text, number, userId) => ({
    type: actionTypes.UPDATE_MESSAGE,
    payload : {
        text,
        number,
        userId
    }
});