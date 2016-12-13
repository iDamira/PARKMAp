const React = require('react');

const LoginPageContainer = React.createClass({
  render: function() {
    return(
      <div>
        <form>
          <div id="login-input-container">
            <input
              className="form-control"
              placeholder="Username"
              type="text" />

            <input
              className="form-control"
              placeholder="Password"
              type="text" />
          </div>

          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
            className="btn btn-block btn-success"
            type="submit">
            LogIn
            </button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = LoginPageContainer;
