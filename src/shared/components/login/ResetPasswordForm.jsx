import React, { PureComponent } from "react";
import { Field, reduxForm, Form } from "redux-form";
import { connect } from "react-redux";
import MailIcon from "mdi-react/MailIcon";
import PropTypes from "prop-types";
import { /* Alert, */ Button } from "reactstrap";
import EyeIcon from "mdi-react/EyeIcon";

const renderedField = ({
  label,
  input,
  type,
  meta: { touched, error, warning },
}) => (
  <div style={{ width: "inherit" }}>
    <input
      {...input}
      placeholder={label}
      type={type}
      style={{ height: "40px" }}
      className="form__form-group-field"
    />
    {touched &&
      ((error && (
        <span style={{ fontSize: "13px", color: "red" }}>{error}</span>
      )) ||
        (warning && (
          <span style={{ fontSize: "13px", color: "red" }}>{warning}</span>
        )))}
  </div>
);

const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";
const confirmPassword = (values) =>
  values.confirmpassword !== values.password
    ? "Password does not match"
    : undefined;
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(8);

class ResetPasswordForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    errorMsg: PropTypes.string,
    fieldUser: PropTypes.string,
    typeFieldUser: PropTypes.string,
    form: PropTypes.string.isRequired,
  };

  static defaultProps = {
    errorMessage: "",
    errorMsg: "",
    fieldUser: "Username",
    typeFieldUser: "text",
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
      auth: false,
      val: false,
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword(e) {
    e.preventDefault();
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }

  onClick = (e) => (values) => {
    e.preventDefault();
    localStorage.setItem("GoCurrentUser", "artiste");
    this.setState({ auth: true });
  };
  render() {
    const { showPassword } = this.state;
    const {
      handleSubmit,
      onSubmit,
      submitting
    } = this.props;
    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="password"
              component={renderedField}
              validate={[required, minLength2]}
              type={showPassword ? "text" : "password"}
              label="Password"
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
          <span className="form__form-group-label">ReType Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="confirm_password"
              component={renderedField}
              validate={[required, minLength2]}
              type={showPassword ? "text" : "password"}
              label="Password"
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
          <Button
            className="account__btn"
            onClick={this.onClick}
            color="#71e015"
            submit="true"
            type="submit"
            disabled={submitting}
            style={{ backgroundColor: "#9dc828" }}
          >
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

export default connect((state) => ({
  reg: state.auth.reg,
}))(reduxForm()(ResetPasswordForm));
