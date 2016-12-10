var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route } from 'react-router'
const routes = require('./routes/routes');


ReactDOM.render(routes, document.getElementById('app'));
