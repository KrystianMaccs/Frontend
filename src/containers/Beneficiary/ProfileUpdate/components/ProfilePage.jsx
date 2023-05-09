import React from "react";
import { Button, ButtonToolbar } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";

const required = (value) => (value ? undefined : "Required");
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
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

const Profile_page = ({ handleSubmit, onSubmit, submitting }) => {
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            validate={[required]}
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
            validate={[required]}
            warn={[alphaNumeric]}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Other Names</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <AccountOutlineIcon />
          </div>
          <Field
            name="other_names"
            component={renderedField}
            type="text"
            label="Other Names"
            warn={[alphaNumeric]}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Bio</span>
        <div className="form__form-group-field">
          <Field name="bio" component="textarea" type="text" />
        </div>
      </div>
      <ButtonToolbar className="form__button-toolbar">
        <Button color="primary" type="submit" disabled={submitting}>
          Update Profile
        </Button>
      </ButtonToolbar>
    </form>
  );
};

Profile_page.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "benefit_update_form", // a unique identifier for this form
})(Profile_page);
