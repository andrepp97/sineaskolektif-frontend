import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

// MDBREACT //
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// REDUX //
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import Reducers from './4. redux/reducers'

// MOMENT
import moment from 'moment';
import 'moment/locale/id';

moment.locale('id');
const globalStore = createStore(Reducers, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(
    <Provider store={globalStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
