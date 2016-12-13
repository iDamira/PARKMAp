const React = require('react');
import LoginForm from './LoginForm';

const LoginPageContainer = React.createClass({
  render: function() {
    return(
      <LoginForm
        loginUsername={this.props.loginUsername}
        updateLoginFormUsername = {this.props.updateLoginFormUsername}
        loginPassword = {this.props.loginPassword}
        updateLoginFormPassword = {this.props.updateLoginFormPassword}
        handleLoginFormSubmit = {this.props.handleLoginFormSubmit}
      />
    )
  }
});

module.exports = LoginPageContainer;
