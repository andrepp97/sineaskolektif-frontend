import {
    LOGIN_SUCCESS,
    USER_LOGOUT,
    IS_LOADING,
    NOT_LOADING
} from '../types';
import Axios from "axios";
import {urlAPI} from "../../5. helper/database";

export const confirmLogin = (user) => {
    // console.log(user)
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
                    alert('Email tidak terdaftar!')
                } else {
                    alert('Server tidak merespon, Coba lagi nanti.')
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