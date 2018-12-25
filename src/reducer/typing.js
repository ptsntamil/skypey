import {actionTypes} from '../constants/actionTypes';

const typing = (state = "", action) => {
    switch(action.type) {
        case actionTypes.SET_TYPING_VALUE:
            return action.payload;
        case actionTypes.SEND_MESSAGE: 
            return "";
        case actionTypes.EDIT_MESSAGE:
            return action.payload.text;
        case actionTypes.UPDATE_MESSAGE:
            return "";
        default:
            return state;
    }
}
export default typing;