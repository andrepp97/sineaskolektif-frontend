import {
    LOGIN_SUCCESS,
    USER_LOGOUT,
    IS_LOADING,
    NOT_LOADING,
    LOGIN_ERROR
} from '../types';

const INITIAL_STATE = {
    id: 0,
    email: '',
    username: '',
    role: '',
    isLoading: false,
    authError: ''
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
        case LOGIN_ERROR:
            return {...state, authError: action.payload}
        case IS_LOADING:
            return {...state, isLoading: true}
        case NOT_LOADING:
            return {...state, isLoading: false}
        case USER_LOGOUT:
            return INITIAL_STATE
        default:
            return state
    }
}