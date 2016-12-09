var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function LandingPage () {
  return (
    <div>
      <h1>PARKMA(p)</h1>
      <p>Parking Buddy</p>
      <Link to="/tutorial">
        <button type="button">Register</button>
      </Link>
    </div>
  )
}

module.exports = LandingPage;
