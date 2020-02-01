import {
    LOGIN_SUCCESS,
    USER_LOGOUT
} from '../types';
// import Axios from 'axios';


export const userLogin = (userObject) => {
    console.log(userObject.email)

    return (dispatch) => {
        localStorage.setItem('user', userObject.email)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                id: 99,
                email: userObject.email,
                username: userObject.email.split('@')[0],
                role: 'user'
            }
        })
    }
}

export const keepLogin = (user) => {
    return (dispatch) => {
        if (user) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    id: 99,
                    email: user,
                    username: user.split('@')[0],
                    role: 'user'
                }
            })
        }
    }
}

export const userLogout = () => {
    localStorage.removeItem('user')
    return {
        type: USER_LOGOUT
    }
}