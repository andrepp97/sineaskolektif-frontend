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
    created: '',
    isLoading: false,
    isLogin: false,
    authError: '',
    loadChecker: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                username: action.payload.username,
                role: action.payload.role,
                created: action.payload.created,
                isLogin: true,
                loadChecker: true
            }
        case LOGIN_ERROR:
            return {...state, authError: action.payload, loadChecker: true}
        case IS_LOADING:
            return {...state, isLoading: true, loadChecker: true}
        case NOT_LOADING:
            return {...state, isLoading: false, loadChecker: true}
        case USER_LOGOUT:
            return {...INITIAL_STATE, loadChecker: true}
        default:
            return state
    }
}