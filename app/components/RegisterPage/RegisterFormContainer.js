const React = require('react');
var Navbar = require('../Navbar/Navbar');


const RegisterForm = React.createClass({
  render: function() {
    return(
      <div>
      <Navbar />
      <p>Hello, I am Signup Page!</p>
      </div>
      )
  }
});

module.exports = RegisterForm;
