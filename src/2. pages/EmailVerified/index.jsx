import React, { useEffect, useState } from 'react';
import { urlAPI } from '../../5. helper/database';
import { MDBIcon, MDBAnimation } from "mdbreact"
import { Link } from 'react-router-dom'
import qs from 'query-string'
import Axios from 'axios';

// REDUX
import { connect } from 'react-redux'
import { confirmLogin } from '../../4. redux/actions';
// REDUX

const EmailVerified = (props) => {
    // HOOKS
    const [message, setMessage] = useState('')

    // ComponentDidMount Functional Version
    useEffect(() => {
        const confirmEmail = () => {
            var params = qs.parse(window.location.search)
            var options = {
                headers: {
                    'Authorization': `Bearer ${params.token}`
                }
            }

            Axios.post(urlAPI + '/user/emailConfirmed', {}, options)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    setMessage('Email Berhasil Dikonfirmasi!')
                    props.confirmLogin(res.data)
                })
                .catch(err => {
                    console.log(err.response)
                    setMessage('Email Gagal Dikonfirmasi!')
                })
        }

        confirmEmail()
    }, [props]);

    // MAIN RENDER
    return (
        <div className="d-flex align-items-center justify-content-center bg-light" style={{ minHeight:'100vh' }}>
            <div className="text-center">
                <MDBAnimation type="bounce" infinite>
                    <MDBIcon icon="check" size="3x" />
                </MDBAnimation>
                <h1>{message}</h1>
                <Link to='/' className="btn btn-outline-indigo rounded-pill">
                    <MDBIcon icon="chevron-left" className="mr-2" />
                    Kembali ke Website
                </Link>
            </div>
        </div>
    );
};

export default connect(null, { confirmLogin })(EmailVerified);