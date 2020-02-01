import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBBtn } from 'mdbreact';

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
            email: this.state.email,
            password: this.state.password
        }

        const isValid = this.validateInput()

        if (isValid) {
            alert(userObj)
        }
    }

    // Saat User Klik Button BUAT AKUN //
    onUserRegister = () => {
        this.validateInput()
        this.confirmUserRegister()
    }
    

    render() {
        if (this.props.username) {
            return <Redirect to='/' />
        }

        return (
            <div className="py-5 overflow-hidden">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-8 col-md-6 mt-5 px-5">
                        <div className="card-auth p-4 p-md-5">
                            <p className="h3-responsive auth-header">DAFTAR</p>
                            <label htmlFor="userName" className="grey-text">
                                Username
                            </label>
                            <input
                                type="email"
                                id="userName"
                                className="form-control"
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}
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
                            />
                            <p className='text-danger font-small text-right'>{this.state.pass2Error}</p>

                            <div className="mt-5">
                                <MDBBtn color="indigo" className="rounded btn-block" onClick={this.onUserRegister}>
                                    <b>Buat Akun</b>
                                </MDBBtn>
                            </div>

                            <p className="mt-4 text-center">
                                Sudah terdaftar ? <Link to="/login">Masuk</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ userData }) => {
    return { ...userData }
}

export default connect(mapStateToProps)(Register)