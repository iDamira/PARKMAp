const React = require('react');
const Navbar = require('../Navbar/Navbar');
const Footer = require('../Footer/Footer');

import './LandingPageContainer.css';

const LandingPage = React.createClass({
  render: function(){
    return(
     <div id="landing-page-container">
        <Navbar />
        <h1>PARKMA</h1>
        <div id="logo"></div>
        <p>Parking Buddy App</p>
        {this.props.children}
        <Footer />
     </div>
    )
  }
});

module.exports = LandingPage;

