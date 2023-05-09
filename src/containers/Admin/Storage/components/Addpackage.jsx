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

const AddPackage = (props) => {
  return (
    <form className="form">
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">Name of Package</span>
        <div className="form__form-group-field">
          <input
            type="text"
            placeholder="Title"
            required
            value={props.title}
            onChange={props.addTitle}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Description</span>
        <div className="form__form-group-field">
          <textarea
            placeholder="Description"
            required
            value={props.description}
            onChange={props.addDescription}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">
          Tracks Count
        </span>
        <div className="form__form-group-field">
          <input
            type="number"
            placeholder="Track Count"
            required
            value={props.tracks_count}
            onChange={props.addTrack}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">
          Number of Years
        </span>
        <div className="form__form-group-field">
          <input
            type="number"
            placeholder="Eta Year"
            required
            value={props.eta_years}
            onChange={props.addYear}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">
          Number of Months
        </span>
        <div className="form__form-group-field">
          <input
            type="number"
            placeholder="Eta Month"
            required
            value={props.eta_months}
            onChange={props.addMonth}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">Price</span>
        <div className="form__form-group-field">
          <input
            type="number"
            placeholder="Price"
            required
            value={props.price}
            onChange={props.addPrice}
          />
        </div>
      </div>
    </form>
  );
};

AddPackage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect((state) => ({}))(AddPackage);
