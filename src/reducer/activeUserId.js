import {actionTypes} from '../constants/actionTypes';

export default function activeUserId(state = null, action) {
    switch(action.type) {
        case actionTypes.SET_ACTIVE_USER_ID:
            return action.payload;
    }
    return state;
}