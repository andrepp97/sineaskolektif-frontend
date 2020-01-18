import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavbarToggler, MDBCollapse, MDBBtn,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar
                color="indigo" expand="md"
                fixed="top" className='px-5'
                dark scrolling
            >
                <MDBNavbarBrand>
                    <Link to='/'>
                        <strong className="white-text">SINEAS KOLEKTIF</strong>
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem className='ml-2'>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-1 font-small">TELUSURI</span>
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
                        <Link to='/login'>
                            <MDBBtn color='white' className='rounded px-3 py-1'>
                                Masuk
                            </MDBBtn>
                        </Link>
                        <Link to='/register'>
                            <MDBBtn color='elegant' className='rounded px-3 py-1'>
                                Daftar
                            </MDBBtn>
                        </Link>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavbarPage;