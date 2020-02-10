import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavbarToggler, MDBCollapse, MDBBtn, MDBIcon,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

// Import Redux Actions //
import { userLogout } from '../4. redux/actions';
// Import Redux Actions //

// Import Logo
import Logo from '../3. assets/img/Logo.png'
// Import Logo

class Navbar extends Component {
    state = {
        isOpen: false
    };

    // FUNCTIONS //
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onUserLogout = () => {
        this.props.userLogout()
    }
    // FUNCTIONS //

    render() {
        return (
            <MDBNavbar
                color="white" expand="md"
                fixed="top" className='px-5'
                light scrolling transparent
            >
                <MDBNavbarBrand>
                    <Link to='/'>
                        <img src={Logo} alt="LOGO" height={30} />
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem className='ml-2'>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret className="text-dark">
                                    <span className="mr-1 font-small font-weight-bold">TELUSURI</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href="#!">Menu 1</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Menu 2</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Menu 3</MDBDropdownItem>
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
                                        <MDBDropdownToggle nav className="d-flex align-items-center text-dark">
                                            <MDBIcon icon="user-circle" style={{fontSize:'24px'}} />
                                            <small className="ml-2">{this.props.username}</small>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <div className="text-center grey-text px-2 mb-3">
                                                <small>{this.props.email}</small>
                                            </div>
                                            <MDBDropdownItem>
                                                <MDBIcon icon="tachometer-alt" className="mr-2" />Dashboard
                                            </MDBDropdownItem>
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