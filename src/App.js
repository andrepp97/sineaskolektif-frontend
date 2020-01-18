import React, { Component } from 'react';
import { withRouter, Route, Switch } from "react-router-dom";

// STYLES //
import './3. assets/styles/App.css';
import './3. assets/styles/pages.css';
import './3. assets/styles/components.css';
// STYLES //

// COMPONENTS & PAGES //
import Navbar from './1. components/Navbar';
import Home from './2. pages/Home/Homepage';
import Login from './2. pages/Login';
import Register from './2. pages/Register';
import PageNotFound from './2. pages/PageNotFound';
import Footer from './1. components/Footer';
// COMPONENTS & PAGES //

class App extends Component {
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

export default withRouter(App);