import {
    LOGIN_SUCCESS,
    USER_LOGOUT
} from '../types';

const INITIAL_STATE = {
    id: 0,
    email: '',
    username: '',
    role: '',
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...INITIAL_STATE,
                id: action.payload.id,
                email: action.payload.email,
                username: action.payload.username,
                role: action.payload.role
            }
        case USER_LOGOUT:
            return INITIAL_STATE
        default:
            return state
    }
}