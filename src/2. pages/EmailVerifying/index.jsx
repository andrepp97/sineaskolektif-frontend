import React, { useState } from 'react';
import Axios from 'axios';
import qs from 'query-string';
import { MDBBtn, MDBIcon, MDBAnimation } from 'mdbreact';
import { urlAPI } from '../../5. helper/database';

const EmailVerifying = () => {
    // HOOKS
    const [isLoading, setLoading] = useState(false)

    // Resend Email Confirmation
    const btnResendEmail = () => {
        setLoading(true)
        var params = qs.parse(window.location.search)

        Axios.post(urlAPI + '/user/resendEmail', {
            email: params.email
        }).then(res => {
            alert(res.data.message)
            setLoading(false)
        }).catch(err => {
            console.log(err.response)
            setLoading(false)
        })
    }

    // MAIN RENDER
    return (
        <div className="d-flex align-items-center justify-content-center bg-light" style={{ minHeight:'100vh' }}>
            <div className="text-center">
                <MDBAnimation type="bounce" infinite>
                    <MDBIcon icon="envelope" size="3x" />
                </MDBAnimation>
                <h2 className="h2-responsive">Silahkan Cek Email Anda Untuk Konfirmasi</h2>
                <h5 className="h5-responsive mt-5">Jika anda tidak menerima email</h5>

                {
                    isLoading
                    ?
                        <MDBBtn color="indigo" className="rounded-pill px-4 py-2" disabled>
                            <div className="spinner-border spinner-border-sm" role="status" />
                        </MDBBtn>
                    :
                        <MDBBtn color='indigo' className="rounded-pill px-4 py-2" onClick={btnResendEmail}>
                            Kirim Ulang
                        </MDBBtn>
                }
            </div>
        </div>
    );

};

export default EmailVerifying;