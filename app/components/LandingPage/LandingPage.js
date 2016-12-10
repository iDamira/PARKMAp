var React = require('react');
var ReactRouter = require('react-router');
var Navbar = require('../Navbar/Navbar');

function LandingPage () {
  return (
    <div>
      <Navbar />
      <h1>PARKMA(p)</h1>
      <p>Parking Buddy</p>
      <img src="http://i.imgur.com/YVc7urW.png" alt="" />
    </div>
  )
}

module.exports = LandingPage;


