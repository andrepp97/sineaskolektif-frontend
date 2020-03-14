import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavbarToggler, MDBCollapse, MDBBtn, MDBIcon,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

// REDUX //
import { connect } from 'react-redux';
import { userLogout } from '../4. redux/actions';

// LOGO
import Logo from '../3. assets/img/Logo_white.png'

class Navbar extends Component {
    state = {
        isOpen: false
    }


    // FUNCTIONS //
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onUserLogout = () => {
        this.props.userLogout()
    }
    // FUNCTIONS //


    // MAIN RENDER
    render() {
        return (
            <MDBNavbar
                color="indigo" expand="md" dark
                fixed="top" className='px-5 py-1'
            >
                <MDBNavbarBrand>
                    <a href='/'>
                        <img src={Logo} alt="LOGO" height={31} />
                    </a>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem className='ml-2'>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-1 font-small font-weight-bold">TELUSURI</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem>
                                        <Link to='/campaign'>Campaign</Link>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <Link to='/polling'>Polling</Link>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        {
                            !this.props.username
                            ?
                                <>
                                    <Link to='/login'>
                                        <MDBBtn color='white' className='rounded px-3 py-1'>
                                            Masuk
                                        </MDBBtn>
                                    </Link>
                                    <Link to='/register'>
                                        <MDBBtn color='indigo' className='rounded px-3 py-1'>
                                            Daftar
                                        </MDBBtn>
                                    </Link>
                                </>
                            :
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav className="d-flex align-items-center">
                                            <MDBIcon icon="user-circle" style={{fontSize:'22px'}} />
                                            <small className="ml-2">{this.props.username}</small>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <div className="text-center grey-text mb-3 px-3">
                                                <small>{this.props.email}</small>
                                            </div>
                                            <Link to='/user/dashboard' className="p-0 text-decoration-none">
                                                <MDBDropdownItem>
                                                        <MDBIcon icon="tachometer-alt" className="mr-2" />Dashboard
                                                </MDBDropdownItem>
                                            </Link>
                                            <hr className="my-2" />
                                            <MDBDropdownItem onClick={this.onUserLogout}>
                                                <MDBIcon icon="sign-out-alt" className="mr-2" />Logout
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                        }
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

const mapStateToProps = ({ userData }) => {
    return { ...userData }
}

export default connect(mapStateToProps, { userLogout })(Navbar);