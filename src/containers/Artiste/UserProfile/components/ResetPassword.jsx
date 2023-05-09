/* eslint-disable react/no-children-prop */
import React, { PureComponent } from "react";
import { Button } from "reactstrap";
import { Field, reduxForm, Form } from "redux-form";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import EyeIcon from "mdi-react/EyeIcon";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ResetPassowrd extends PureComponent {
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
    const { handleSubmit, onSubmit, isLoading } = this.props;
    const { showPassword } = this.state;
    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__form-group">
          <span className="form__form-group-label">Old Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="old_password"
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
        <div className="form__form-group">
          <span className="form__form-group-label">New Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="new_password"
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
            Reset
          </Button>
        </div>
      </Form>
    );
  }
}
const mapStateToProps = (state) => ({
  initialValues: state.auth.user, // retrieve name from redux store
});

export default connect(mapStateToProps)(reduxForm()(ResetPassowrd));
