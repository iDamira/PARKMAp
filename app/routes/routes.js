const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
// const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const LandingPage = require('../components/LandingPage/LandingPage');
const LoginPageContainer = require('../components/LoginPage/LoginPageContainer');
const TutorialPage = require('../components/TutorialPage/TutorialPageContainer');
const RegisterPage = require('../components/RegisterPage/RegisterFormContainer');
const MapViewPage = require('../components/MapViewPage/MapViewPageContainer');

const routes = (
<Router history={hashHistory}>
  <Route path='/' component={LandingPage}>
  </Route>
  <Route path='login' component={LoginPageContainer}/>
  <Route path='tutorial' component={TutorialPage} />
  <Route path='register' component={RegisterPage} />
  <Route path='map' component={MapViewPage} />
</Router>
);

module.exports = routes;
