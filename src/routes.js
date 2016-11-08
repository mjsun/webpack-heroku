import React from 'react';
import {Route, IndexRoute} from 'react-router';


import App from './components/app';
import Home from './components/home';

export default (
    <Route path="/" component={App}>
        <Route path="home" component={Home} />
    </Route>
)