const React = require('react');
const RegisterForm = require('./RegisterForm');

const RegisterFormContainer = React.createClass({
  render: function(){
    return(
      <div>
        <RegisterForm />
      </div>
    )
  }
});

module.exports = RegisterFormContainer;
