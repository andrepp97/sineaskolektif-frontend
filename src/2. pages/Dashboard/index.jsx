import React, { Component } from 'react';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Dashboard extends Component {
    render() {
        return (
            <div className="page-padding">

                <MDBNav className="nav-tabs">
                    <MDBNavItem>
                        <MDBNavLink to="/dashboard" role="tab" >
                            Home
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/profile" role="tab" >
                            Profile
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/campaign" role="tab" >
                            Profile
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNav>

                <div className="container">


                    <h2>INI DASHBOARD</h2>

                </div>
            </div>
        );
    }
}

export default Dashboard;