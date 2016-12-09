const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
// const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const LandingPage = require('../components/LandingPage/LandingPage');

const routes = (
<Router history={hashHistory}>
  <Route path='/' component={LandingPage}>
  </Route>
</Router>
);

module.exports = routes;
