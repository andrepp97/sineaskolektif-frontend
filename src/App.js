import React, { useEffect, useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

// REDUX //
import {connect} from 'react-redux';
import {keepLogin} from './4. redux/actions';

// STYLES //
import './3. assets/styles/App.css';
import './3. assets/styles/pages.css';
import './3. assets/styles/components.css';

// TOAST //
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

// COMPONENTS
import Routes from './Routes';
import Navbar from './1. components/Navbar';
import Footer from './1. components/Footer';
import LoadingScreen from './2. pages/LoadingScreen';

const App = (props) => {
  // VARIABLES
  const loc = useLocation()

  // LIFECYCLE
  useEffect(() => {
    let user = localStorage.getItem('token')
    props.keepLogin(user)
  }, [])

  // RENDER
  return !props.loadChecker
  ? <LoadingScreen />
  : (
    <div>
      <ToastContainer
        autoClose={4000}
        style={{zIndex:9999}}
      />

      {
        loc.pathname === "/login" || loc.pathname === "/register"
        ? null
        : <Navbar/>
      }

      <Routes />

      <Footer/>
    </div>
  )
}

const mapStateToProps = ({userData}) => {
    return {...userData}
}

export default withRouter(
  connect(mapStateToProps, { keepLogin })(App)
);
