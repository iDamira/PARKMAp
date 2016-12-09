const React = require('react');
var Navbar = require('../Navbar/Navbar');


const LoginPageContainer = React.createClass({
  render: function() {
    return(
      <div>
       <Navbar />
      <p>Hello, I am Login page!</p>
      </div>
      )
  }
});

module.exports = LoginPageContainer;
