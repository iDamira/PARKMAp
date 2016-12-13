import React from 'react';

const LoginForm = props => (
  <div>
    <input
      type="text"
      value={props.loginUsername}
      onChange={props.updateLoginFormUsername}
    />
    <input
      type="password"
      value={props.loginPassword}
      onChange={props.updateLoginFormPassword}
    />
    <button onClick={props.handleLoginFormSubmit}>
      Login
    </button>
  </div>
);

export default LoginForm;
