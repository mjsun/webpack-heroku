import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import './styles/app.scss'
import {Router, hashHistory} from 'react-router';
import routes from './routes';

render(<Router history={hashHistory} routes={routes}/>, document.getElementById('main'))
