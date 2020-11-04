import React, { Component } from 'react';
import { MDBIcon, MDBAlert } from 'mdbreact';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../3. assets/img/Logo.png';

// REDUX
import { connect } from 'react-redux';
import { userSignup } from '../../4. redux/actions';
// REDUX

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        nameError: '',
        emailError: '',
        passError: '',
        pass2Error: ''
    }

    // LIFECYCLE //
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    // LIFECYCLE //

    // Cek Apakah Semua Kolom Sudah Diisi //
    validateInput = () => {
        let nameError, emailError, passError, pass2Error = ''
        
        if (this.state.username === '') {
            nameError = `Username can't be empty`
        } else {
            nameError = ''
            this.setState({ nameError })
        }
        
        if (this.state.email === '' || !this.state.email.includes('@')) {
            emailError = 'Please input a valid email'
        } else {
            emailError = ''
            this.setState({ emailError })
        }
        
        if (this.state.password === '') {
            passError = 'Please provide a password'
        } else if (this.state.password.length < 6) {
            passError = 'Password at least contains 6 characters'
        } else {
            passError = ''
            this.setState({ passError })
        }
        
        if (this.state.password2 !== this.state.password) {
            this.setState({
                pass2Error: 'Passwords are not the same'
            })
            return false
        }
        
        if (nameError || emailError || passError || pass2Error) {
            this.setState({
                nameError,
                emailError,
                passError,
                pass2Error
            })
            return false
        }
        
        return true
    }

    // Jika Input nya Valid maka Melakukan Register //
    confirmUserRegister = () => {
        let userObj = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }

        const isValid = this.validateInput()

        if (isValid) {
            this.props.userSignup(userObj)
        }
    }

    // Saat User Klik Button BUAT AKUN //
    onUserRegister = () => {
        this.validateInput()
        this.confirmUserRegister()
    }

    // Register saat user tekan ENTER //
    onEnterRegister = (event) => {
        if (event.key === 'Enter') {
            this.onUserRegister()
        }
    }

    
    // MAIN RENDER
    render() {
        if (this.props.success) {
            return <Redirect to={`/EmailVerifying?email=${this.props.emailSuccess}`} />
        }

        return this.props.username
        ? <Redirect to='/' />
        : (
            <div className="page-container bg-auth pb-5">

                <div className="text-center mt-5">
                    <Link to="/">
                        <img src={Logo} alt="Sineas Kolektif" height={75} />
                    </Link>
                </div>

                <div className="row justify-content-center align-items-center">

                    <div className="col-sm-8 col-md-6 mt-5 px-5">

                        <div className="card-auth p-4 px-md-5">

                            <p className="h3-responsive auth-header">DAFTAR</p>

                            {
                                this.props.regError
                                ?
                                    <MDBAlert color="danger" className="text-center hoverable">
                                        {this.props.regError}
                                    </MDBAlert>
                                :
                                    null
                            }

                            <label htmlFor="userName" className="grey-text">
                                Username
                            </label>
                            <input
                                type="email"
                                id="userName"
                                className="form-control"
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}
                                onKeyUp={this.onEnterRegister}
                            />
                            <p className='text-danger font-small text-right'>{this.state.nameError}</p>
                            
                            <label htmlFor="userEmail" className="grey-text">
                                Email
                            </label>
                            <input
                                type="email"
                                id="userEmail"
                                className="form-control"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                                onKeyUp={this.onEnterRegister}
                            />
                            <p className='text-danger font-small text-right'>{this.state.emailError}</p>
                            
                            <label htmlFor="userPassword" className="grey-text">
                                Password
                            </label>
                            <input
                                type="password"
                                id="userPassword"
                                className="form-control"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                                onKeyUp={this.onEnterRegister}
                            />
                            <p className='text-danger font-small text-right'>{this.state.passError}</p>
                            
                            <label htmlFor="userPassword2" className="grey-text">
                                Ulangi Password
                            </label>
                            <input
                                type="password"
                                id="userPassword2"
                                className="form-control"
                                value={this.state.password2}
                                onChange={(e) => this.setState({ password2: e.target.value })}
                                onKeyUp={this.onEnterRegister}
                            />
                            <p className='text-danger font-small text-right'>{this.state.pass2Error}</p>

                            <p className='text-center font-small opacity-90 py-2'>
                                Dengan mendaftar, saya menyetujui <span className="font-weight-bold">Syarat dan Ketentuan</span> serta <span className="font-weight-bold">Kebijakan Privasi</span>
                            </p>

                            <div className="mt-4">
                                {
                                    this.props.isLoading
                                    ?
                                        <button className="btn btn-block btn-auth" disabled>
                                            <div className="spinner-border spinner-border-sm" role="status" />
                                        </button>
                                    :
                                        <button className="btn btn-block btn-auth" onClick={this.onUserRegister}>
                                            <MDBIcon icon="user-plus" />
                                            <b className="ml-2">Buat Akun</b>
                                        </button>
                                }
                            </div>

                            <p className="mt-4 text-center">
                                Sudah punya akun? <Link to="/login">Masuk</Link>
                            </p>

                        </div>
                        
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ userData, regisData }) => {
    return { ...userData, ...regisData }
}

export default connect(mapStateToProps, { userSignup })(Register)