import Axios from 'axios'
import { urlAPI } from '../../5. helper/database'
import {
    ON_USER_REGISTER,
    REGISTER_FAILED,
    REGISTER_SUCCESS
} from '../types'


export const userSignup = (regisObj) => {
    return (dispatch) => {
        dispatch({
            type: ON_USER_REGISTER
        })

        Axios.post(urlAPI + '/user/register', {
            username: regisObj.username,
            password: regisObj.password,
            email: regisObj.email
        }).then((res) => {
            console.log(res)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: regisObj.email
            })
        }).catch((err) => {
            let msg = err.response.data
            if (msg === 'duplicate') {
                dispatch({
                    type: REGISTER_FAILED,
                    payload: 'Email sudah digunakan!'
                })
            } else {
                dispatch({
                    type: REGISTER_FAILED,
                    payload: 'Server tidak merespon, coba lagi nanti.'
                })
            }
        })
    }
}