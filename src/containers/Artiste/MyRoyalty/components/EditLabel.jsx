import React, { useEffect, useState } from "react";
import { Modal, Button, ButtonToolbar, Container } from "reactstrap";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

const EditLabel = ({
  title,
  description,
  addTitle,
  addDescription,
  se,
  setSe,
}) => {
  return (
    <form className="form">
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">Title</span>
        <div className="form__form-group-field">
          <input
            type="text"
            placeholder="Name"
            required
            value={title}
            onChange={(e) => {
              addTitle(e);
              title.length < 3 ? setSe(true) : setSe(false);
            }}
          />
        </div>
        <span>
          {se ? (
            <div style={{ color: "#ff0000" }}>
              {" "}
              Name of field is less than 3
            </div>
          ) : null}
        </span>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Description</span>
        <div className="form__form-group-field">
          <textarea
            placeholder="label description..."
            required
            value={description}
            onChange={addDescription}
          />
        </div>
      </div>
    </form>
  );
};

EditLabel.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect((state) => ({}))(EditLabel);
