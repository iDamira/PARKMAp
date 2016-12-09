var React = require('react');
var ReactRouter = require('react-router');
var Navbar = require('../Navbar/Navbar');

function LandingPage () {
  return (
    <div>
      <Navbar />
      <h1>PARKMA(p)</h1>
      <p>Parking Buddy</p>
    </div>
  )
}

module.exports = LandingPage;
