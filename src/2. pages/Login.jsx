import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBBtn } from 'mdbreact';

class Login extends Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passError: ''
    }

    // Cek Apakah Semua Kolom Sudah Diisi //
    validateInput = () => {
        let emailError, passError = ''

        if (this.state.email === '' || !this.state.email.includes('@')) {
            emailError = 'Please input a valid email'
        } else {
            emailError = ''
            this.setState({ emailError })
        }

        if (this.state.password === '') {
            passError = 'Please input your password'
        } else {
            passError = ''
            this.setState({ passError })
        }

        if (emailError || passError) {
            this.setState({
                emailError,
                passError
            })
            return false
        }

        return true
    }

    // Jika Input nya Valid maka Melakukan Register //
    confirmUserLogin = () => {
        let userObj = {
            email: this.state.email,
            password: this.state.password
        }

        const isValid = this.validateInput()

        if (isValid) {
            alert(userObj)
        }
    }

    // Saat User Klik Button MASUK //
    onUserLogin = () => {
        this.validateInput()
        this.confirmUserLogin()
    }


    render() {
        return (
            <div className="page-container">
                <MDBRow>
                    <div className="col-lg-6 offset-lg-3 card px-5 py-4">
                        <p className="h3-responsive auth-header">MASUK</p>
                        <label htmlFor="userEmail" className="grey-text">
                            Email Anda
                        </label>
                        <input
                            type="email"
                            id="userEmail"
                            className="form-control"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        <p className='text-danger font-small text-right'>{this.state.emailError}</p>

                        <br />
                        
                        <label htmlFor="userPassword" className="grey-text">
                            Password
                        </label>
                        <input
                            type="password"
                            id="userPassword"
                            className="form-control"
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                        <p className='text-danger font-small text-right'>{this.state.passError}</p>
                        
                        <div className="mt-3">
                            <MDBBtn color="indigo" className="rounded btn-block" onClick={this.onUserLogin}>
                                <b>Masuk</b>
                            </MDBBtn>
                        </div>
                        <p className="mt-4 text-center">
                            Belum punya akun ? <Link to="/register">Daftar</Link>
                        </p>
                    </div>
                </MDBRow>
            </div>
        );
    }
}

export default Login;