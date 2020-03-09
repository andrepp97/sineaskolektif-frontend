import React from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { connect } from 'react-redux';

// DASHBOARD COMPONENTS
import User from './user';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Campaign from './components/campaign';
import Polling from './components/polling';

const DashboardRoute = (props) => {

    const { path } = useRouteMatch();

    if (props.isLogin) {
        return (
            <div className="py-5">
    
                {/* DASHBOARD HEADER */}
                <div style={{ background:'#ededed' }}>
                    <div className="container">
    
                        <User />

                        <hr/>
    
                        <MDBNav className="nav-tabs">
                            <MDBNavItem>
                                <MDBNavLink to={`${path}/dashboard`}>
                                    Dashboard
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to={`${path}/profile`}>
                                    Profile
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to={`${path}/campaign`}>
                                    Campaign
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to={`${path}/polling`}>
                                    Polling
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
    
                    </div>
                </div>
                {/* DASHBOARD HEADER */}
    
                {/* DASHBOARD PAGES */}
                <div className="container">
                    <Switch>
                        <Route exact path={`${path}/dashboard`}>
                            <Dashboard />
                        </Route>
                        <Route exact path={`${path}/profile`}>
                            <Profile />
                        </Route>
                        <Route exact path={`${path}/campaign`}>
                            <Campaign uid={props.id} />
                        </Route>
                        <Route exact path={`${path}/polling`}>
                            <Polling uid={props.id} />
                        </Route>
                    </Switch>
                </div>
                {/* DASHBOARD PAGES */}
    
            </div>
        );
    } else {
        return <Redirect to='/' />
    }
};

const mapStateToProps = ({ userData }) => {
    return { ...userData }
}

export default connect(mapStateToProps)(DashboardRoute);