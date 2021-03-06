const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
import './Navbar.css';

const Navbar = React.createClass({
  render: function(){
    return(
      <div className="navbar_container">
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
});

module.exports = Navbar;
