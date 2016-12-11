var React = require('react');
var ReactRouter = require('react-router');
var Navbar = require('../Navbar/Navbar');

const LandingPage = React.createClass({
  render: function() {
    return(
    <div>
      <Navbar />
      <h1>PARKMA</h1>
      <p>Parking Buddy</p>
      {this.props.children}
    </div>
    )
  }
});

module.exports = LandingPage;


