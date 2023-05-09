/* eslint-disable react/no-children-prop */
import React, { PureComponent } from "react";
import { Button } from "reactstrap";
import { Field, reduxForm, Form } from "redux-form";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import EyeIcon from "mdi-react/EyeIcon";
import PropTypes from "prop-types";

class ProfileSettings extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.state = {
      showPassword: false,
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword(e) {
    e.preventDefault();
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;
    const { showPassword } = this.state;
    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        {/*   <Alert color='danger' isOpen={!!errorMessage || !!errorMsg}>
          {errorMessage}
          {errorMsg}
        </Alert> */}
        <div className="form__form-group">
          <span className="form__form-group-label">First Name</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="firstname"
              component="input"
              type="text"
              placeholder="First Name"
              // onChange={e => this.setState({email:e.target.value})}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Last Name</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="lastname"
              component="input"
              type="text"
              placeholder="Last Name"
              // onChange={e => this.setState({email:e.target.value})}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Phone No.</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="phone"
              component="input"
              type="text"
              placeholder="+ 234 8033 339 267"
              // onChange={e => this.setState({email:e.target.value})}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Email</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="example@mail.com"
              // onChange={e => this.setState({email:e.target.value})}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="password"
              component="input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              className={`form__form-group-button${
                showPassword ? " active" : ""
              }`}
              onClick={(e) => this.showPassword(e)}
            >
              <EyeIcon />
            </button>
          </div>
        </div>

        <div className="account__btns">
          <Button className="account__btn" submit="true" color="primary">
            Update
          </Button>
        </div>
      </Form>
    );
  }
}

export default reduxForm({
  form: "profile_settings_form", // a unique identifier for this form
})(ProfileSettings);
