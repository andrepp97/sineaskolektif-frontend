import React from 'react';
import { Route, Switch  } from 'react-router-dom';

// PAGES //
import Home from './2. pages/Home';
import Login from './2. pages/Auth/Login';
import Register from './2. pages/Auth/Register';
import EmailVerifying from './2. pages/EmailVerifying';
import EmailVerified from './2. pages/EmailVerified';
import BuatCampaign from './2. pages/Campaign/buatCampaign';
import SemuaCampaign from './2. pages/Campaign/semuaCampaign';
import DetailCampaign from './2. pages/Campaign/detailCampaign';
import BuatPolling from './2. pages/Polling/buatPolling';
import SemuaPolling from './2. pages/Polling/semuaPolling';
import Dashboard from './2. pages/Dashboard/DashboardRoute';
import PageNotFound from './2. pages/404';


const Routes = () => {
    return (
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/EmailVerifying' exact component={EmailVerifying} />
          <Route path='/EmailVerified' exact component={EmailVerified} />
          <Route path='/campaign' exact component={SemuaCampaign} />
          <Route path='/campaign/:id' exact component={DetailCampaign} />
          <Route path='/buat-campaign' exact component={BuatCampaign} />
          <Route path='/polling' exact component={SemuaPolling} />
          <Route path='/buat-polling' exact component={BuatPolling} />
          <Route path='/user' component={Dashboard} />
          <Route path='*' component={PageNotFound} />
        </Switch>
    );
};

export default Routes;