import React, { Component } from 'react';
import { withRouter, Route, Switch } from "react-router-dom";

// REDUX //
import {connect} from 'react-redux';
import {keepLogin} from './4. redux/actions';
// REDUX //

// STYLES //
import './3. assets/styles/App.css';
import './3. assets/styles/pages.css';
import './3. assets/styles/components.css';
// STYLES //

// TOAST //
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
// TOAST //

// COMPONENTS
import Navbar from './1. components/Navbar';
import Footer from './1. components/Footer';
import LoadingScreen from './2. pages/LoadingScreen';
// COMPONENTS

// PAGES //
import Home from './2. pages/Home';
import Login from './2. pages/Auth/Login';
import Register from './2. pages/Auth/Register';
import EmailVerifying from './2. pages/EmailVerifying';
import EmailVerified from './2. pages/EmailVerified';
import BuatCampaign from './2. pages/Campaign/buatCampaign';
import BuatPolling from './2. pages/Polling/buatPolling';
import Dashboard from './2. pages/Dashboard/DashboardRoute';
import PageNotFound from './2. pages/404';
// PAGES //


class App extends Component {
  // LIFECYCLE //
  componentDidMount() {
    let user = localStorage.getItem('token')
    this.props.keepLogin(user)
  }
  // LIFECYCLE //


  // MAIN RENDER
  render() {
    if (!this.props.loadChecker) {
      return <LoadingScreen />
    }

    return (
      <div>
        {/* TOAST */}
        <ToastContainer
          autoClose={4000}
          style={{zIndex:9999}}
        />
        {/* TOAST */}

        <Navbar/>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/EmailVerifying' exact component={EmailVerifying} />
          <Route path='/EmailVerified' exact component={EmailVerified} />
          <Route path='/buat-campaign' exact component={BuatCampaign} />
          <Route path='/buat-polling' exact component={BuatPolling} />
          <Route path='/user' component={Dashboard} />
          <Route path='*' component={PageNotFound} />
        </Switch>

        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = ({userData}) => {
    return {...userData}
}

export default withRouter(
  connect(mapStateToProps, { keepLogin })(App)
);