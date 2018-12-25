import { actionTypes } from './../constants/actionTypes';

const activeMessageId = (state = "", action) => {
    switch(action.type) {
        case actionTypes.EDIT_MESSAGE:
            return action.payload.number;
        default:
            return state;
    }
}

export default activeMessageId;