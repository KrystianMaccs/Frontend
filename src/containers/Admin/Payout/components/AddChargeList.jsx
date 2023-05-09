import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select from "react-select";
import classNames from "classnames";

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

const AddChargeList = (props) => {
  return (
      <form className="form">
        <div className="form__form-group">
          <span className="form__form-group-label typography-message">
          Name of Charge
          </span>
          <div className="form__form-group-field">
            <input
              type="text"
              placeholder="Name"
              required
              value={props.name}
              onChange={props.addName}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label typography-message">
            Amount
          </span>
          <div className="form__form-group-field">
            <input
              type="text"
              placeholder="Amount"
              required
              value={props.amount}
              onChange={props.addAmount}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Description</span>
          <div className="form__form-group-field">
            <textarea
              placeholder="charge description..."
              required
              value={props.description}
              onChange={props.addDescription}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Charge Type</span>
          <div className="form__form-group-field priority">
            <Select
              options={[
                { value: "FLAT", label: "FLAT" },
                { value: "PERCENTAGE", label: "PERCENTAGE" },
              ]}
              value={props.charge_type}
              onChange={props.addChargetype}
            />
          </div>
        </div>
        {props.charge_type.value === "PERCENTAGE" ? (
          <div className="form__form-group">
            <span className="form__form-group-label">Max Fee</span>
            <div className="form__form-group-field">
              <textarea
                placeholder="charge description..."
                required
                value={props.max_fee}
                onChange={props.addMaxfee}
              />
            </div>
          </div>
        ) : null}
      </form>
  );
};

AddChargeList.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect((state) => ({}))(AddChargeList);
