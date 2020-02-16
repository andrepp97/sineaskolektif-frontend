import {
    LOGIN_SUCCESS,
    USER_LOGOUT,
    IS_LOADING,
    NOT_LOADING,
    LOGIN_ERROR
} from '../types';
import Axios from "axios";
import {urlAPI} from "../../5. helper/database";

export const confirmLogin = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const userLogin = (userObject) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING
        })

        Axios.post(urlAPI + '/user/login', {
                email: userObject.email,
                password: userObject.password
            }).then((res) => {
                localStorage.setItem('token', res.data.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        id: res.data.id,
                        username: res.data.username,
                        email: res.data.email,
                        role: res.data.role
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: NOT_LOADING
                })
                if (err.response.data === 'NoResult') {
                    dispatch({
                        type: LOGIN_ERROR,
                        payload: 'Email tidak terdaftar!'
                    })
                } else if (err.response.data === 'WrongPass') {
                    dispatch({
                        type: LOGIN_ERROR,
                        payload: 'Password anda salah!'
                    })
                } else {
                    dispatch({
                        type: LOGIN_ERROR,
                        payload: 'Server tidak merespon, coba lagi nanti.'
                    })
                }
            })
    }
}

export const keepLogin = (token) => {
    return (dispatch) => {
        var options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        Axios.post(urlAPI + '/user/keepLogin', null, options)
            .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        id: res.data.id,
                        username: res.data.username,
                        email: res.data.email,
                        role: res.data.role
                    }
                })
            })
            .catch(err => {
                localStorage.removeItem('token')
                console.log(err.response)
                dispatch({
                    type: USER_LOGOUT
                })
            })
    }
}

export const userLogout = () => {
    localStorage.removeItem('token')
    return {
        type: USER_LOGOUT
    }
}