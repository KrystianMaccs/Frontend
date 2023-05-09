import React, { PureComponent, useEffect } from "react";
import { Field, reduxForm, Form, getFormValues } from "redux-form";
import { connect } from "react-redux";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import MailIcon from "mdi-react/MailIcon";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import { Button } from "reactstrap";
import renderCheckBoxField from "../../../shared/components/form/CheckBox";
import Select from "react-select";

/**export const renderField = ({
  input,
  placeholder,
  type,
  mask,
  className,
  guide = true,
  pipe,
  keepCharPositions = false,
}) => (
  <MaskedInput
    {...input}
    placeholder={placeholder}
    type={type}
    mask={mask}
    className={className}
    guide={guide}
    pipe={pipe}
    keepCharPositions={keepCharPositions}
  />
);*/

export const renderField = ({
  input,
  placeholder,
  type,
  mask,
  className,
  guide = true,
  pipe,
  keepCharPositions = false,
}) => (
  input?.value !== undefined ? (
    <MaskedInput
      {...input}
      placeholder={placeholder}
      type={type}
      mask={mask}
      className={className}
      guide={guide}
      pipe={pipe}
      keepCharPositions={keepCharPositions}
    />
  ) : null
);



const required = (value) => (value ? undefined : "Required");
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
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
class RegisterForm extends PureComponent {
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
      popoverOpen: false,
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword(e) {
    e.preventDefault();
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }

  toggle = () => {
    this.setState((prevState) => ({ popoverOpen: !prevState.popoverOpen }));
  };

  render() {
    const {
      handleSubmit,
      onSubmit,
      submitting,
      code,
      handleChange,
      countries,
    } = this.props;
    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__form-group">
          <span className="form__form-group-label">Email</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="email"
              component={renderedField}
              type="email"
              label="example@mail.com"
              validate={[email, required]}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">First Name</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="first_name"
              component={renderedField}
              type="text"
              label="First Name"
              validate={[required, maxLength15, minLength2]}
              warn={alphaNumeric}
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
              name="last_name"
              component={renderedField}
              type="text"
              label="Last Name"
              validate={[required, maxLength15, minLength2]}
              warn={alphaNumeric}
              // onChange={e => this.setState({email:e.target.value})}
            />
          </div>
        </div>
        <div className="form__form-group form__form-group--address">
          <span className="form__form-group-label">Phone</span>
          <div className="form__form-group-field">
            <Select
              onChange={handleChange}
              name="nationality"
              options={countries}
              clearable={false}
              className="react-select"
              placeholder="Country"
              classNamePrefix="react-select"
              style={{
                height: "40px",
                //width:"90px"
              }}
              value={code}
            />
            <Field
              name="phone"
              component={renderField}
              type="text"
              mask={[
                "0",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              className="phone-input"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Field
              name="terms"
              component={renderCheckBoxField}
              label="I agree to the Terms and Conditions" /**should have a link here */
              className="colored-click"
            />
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
            Sign Up
          </Button>
        </div>
      </Form>
    );
  }
}

export default connect((state) => ({
  reg: state.auth.reg,
  countries: state.auth.countries,
  myvalues: getFormValues("register_form")(state),
}))(reduxForm()(RegisterForm));
