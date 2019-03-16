import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/login/Login';
import PageNotFound from './components/page404/PageNotFound';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="*" component={PageNotFound}/>
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));

