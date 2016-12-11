var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Navbar () {
  return (
    <div>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to="/tutorial">
        <button type="button">Tutorial</button>
      </Link>
      <Link to="/login">
        <button type="button">Login</button>
      </Link>
      <Link to="/register">
        <button type="button">Register</button>
      </Link>
      <Link to="/map">
        <button type="button">Go To Map</button>
      </Link>
    </div>
  )
}

module.exports = Navbar;
