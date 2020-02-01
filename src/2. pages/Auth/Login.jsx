import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBBtn } from 'mdbreact';

// Import User Actions //
import { userLogin } from '../../4. redux/actions';
// Import User Actions //


class Login extends Component {
    state = {
        email: '',
        password: '',
        emailError: '',
        passError: ''
    }

    // LIFECYCLE //
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    // LIFECYCLE //

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
        } else if (this.state.password.length < 6) {
            passError = 'Password at least 6 characters'
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

    // Jika Input nya Valid maka Melakukan Login //
    confirmUserLogin = () => {
        let userObj = {
            email: this.state.email,
            password: this.state.password
        }

        const isValid = this.validateInput()

        if (isValid) {
            this.props.userLogin(userObj)
        }
    }

    // Saat User Klik Button MASUK //
    onUserLogin = () => {
        this.validateInput()
        this.confirmUserLogin()
    }

    // Login Saat User Tekan Enter
    onUserLoginEnter = (event) => {
        if (event.key === 'Enter') {
            this.onUserLogin()
        }
    }

    // Main Render
    render() {
        if (this.props.username) {
            return <Redirect to='/' />
        }

        return (
            <div className="page-container">
                <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
                    <div className="col-sm-8 col-md-6 mt-5 px-5">
                        <div className="card-auth p-4 p-md-5">

                            <p className="h3-responsive auth-header">MASUK</p>

                            <label htmlFor="userEmail">
                                Email Anda
                            </label>
                            <input
                                type="email"
                                id="userEmail"
                                className="form-control"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                            <p id="txtError" className='text-danger font-small text-right animation bounceIn'>
                                {this.state.emailError}
                            </p>
                            
                            <label htmlFor="userPassword">
                                Password
                            </label>
                            <input
                                type="password"
                                id="userPassword"
                                className="form-control"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                                onKeyUp={this.onUserLoginEnter}
                            />
                            <p id="txtError" className='text-danger font-small text-right animation bounceInUp'>
                                {this.state.passError}
                            </p>
                            
                            <div className="mt-5">
                                <MDBBtn color="indigo" className="rounded btn-block" onClick={this.onUserLogin}>
                                    <b>Masuk</b>
                                </MDBBtn>
                            </div>

                            <p className="mt-4 text-center">
                                Belum punya akun ? <Link to="/register">Daftar</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({userData}) => {
    return {...userData}
}

export default connect(mapStateToProps, { userLogin })(Login)