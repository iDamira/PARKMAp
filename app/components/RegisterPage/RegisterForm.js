const React = require('react');

const RegisterForm = React.createClass({
  render: function(){
    return(
      <div>
        <form>
          <div className="input-form">
            <input
                className="form-control"
                placeholder="First Name"
                type="text"
              />
              <input
                className="form-control"
                placeholder="Last Name"
                type="text"
              />
              <input
                className="form-control"
                placeholder="Username"
                type="text"
              />
              <input
                className="form-control"
                placeholder="Email adress"
                type="text"
              />
              <input
                className="form-control"
                placeholder="Phone Number"
                type="text"
              />
              <input
                className="form-control"
                placeholder="Car type"
                type="text"
              />
          </div>
          <div className="submit-button">
            <button
            className="btn btn-block btn-success"
            type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = RegisterForm;
