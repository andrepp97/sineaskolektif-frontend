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

// COMPONENTS & PAGES //
import Navbar from './1. components/Navbar';
import Home from './2. pages/Home';
import Login from './2. pages/Auth/Login';
import Register from './2. pages/Auth/Register';
import PageNotFound from './2. pages/404';
import Footer from './1. components/Footer';
// COMPONENTS & PAGES //

class App extends Component {
  // LIFECYCLE //
  componentDidMount() {
    let user = localStorage.getItem('user')
    this.props.keepLogin(user)
  }
  // LIFECYCLE //

  render() {
    return (
      <div>
        <Navbar/>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='*' component={PageNotFound} />
        </Switch>

        <Footer/>
      </div>
    );
  }
}

export default withRouter(
  connect(null, { keepLogin })(App)
);