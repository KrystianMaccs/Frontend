import React, { useState, useEffect } from "react";
import { Button, ButtonToolbar, ButtonGroup } from "reactstrap";
import {
  Field,
  reduxForm,
  getFormValues,
  getFormInitialValues,
} from "redux-form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from "react-select";
import MailIcon from "mdi-react/MailIcon";
import renderDatePickerField from "../../../../shared/components/form/DatePicker";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";
import states from "../utils/states";
import csc from "country-state-city";

const required = (value) => (value ? undefined : "Required");
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

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
const WizardFormTwo = ({
  handleSubmit,
  previousPage,
  submitting,
  city,
  state,
  handleState,
  handleCity,
}) => {
  const data = [];
  const data2 = [];
  useEffect(() => {
    const c = csc.getStatesOfCountry(localStorage.getItem("countryCode"));
    for (let i = 0; i < c.length; i++) {
      const element = {
        value: c[i].countryCode,
        label: c[i].countryName,
      };
      data.push(element);
    }
    if (state) {
      const c = csc.getCitiesOfState(state.isoCode);
      for (let i = 0; i < c.length; i++) {
        const element = {
          value: c[i].countryCode,
          label: c[i].countryName,
        };
        data2.push(element);
      }
    }
  }, [state]);
  const [member, setMember] = useState(true);

  const compare = (a, b) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label < b.label) {
      return 1;
    }

    return 0;
  };
  const yesClick = (e) => {
    e.preventDefault();
    setMember(true);
  };

  const noClick = (e) => {
    e.preventDefault();
    setMember(false);
  };

  return (
    <form className="form wizard__form" onSubmit={handleSubmit}>
      <h4 className="wizard__title">
        {" "}
        This registration makes you an MCSN Member
      </h4>
      <div className="form__form-group">
        <span className="form__form-group-label">DOB</span>

        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <CalendarBlankIcon />
          </div>
          <Field name="dob" component={renderDatePickerField} />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">State of Residence</span>
        <div className="form__form-group-field">
          <Select
            onChange={handleState}
            name="nationality"
            options={data}
            clearable={false}
            className="react-selected"
            placeholder="State"
            classNamePrefix="react-select"
            value={state}
          />
        </div>
      </div>
      {state !== null ? (
        <div className="form__form-group">
          <span className="form__form-group-label">Local Government Area</span>
          <div className="form__form-group-field">
            <Select
              onChange={handleCity}
              name="nationality"
              options={data2}
              clearable={false}
              className="react-selected"
              placeholder="L.G.A"
              classNamePrefix="react-select"
              value={city}
            />
          </div>
        </div>
      ) : null}

      <div className="form__form-group">
        <span className="form__form-group-label">Are you an MCSN Member</span>
        <div
          className="form__form-group-field"
          style={{ padding: "0", margin: 0 }}
        >
          <ButtonGroup dir="ltr">
            <Button outline onClick={yesClick}>
              Yes
            </Button>
            <Button outline onClick={noClick}>
              No
            </Button>
          </ButtonGroup>
        </div>
      </div>
      {member ? (
        <div className="form__form-group">
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="mcsn"
              component={renderedField}
              type="text"
              label="Reg. No."
              validate={[required, maxLength15]}
            />
          </div>
        </div>
      ) : null}
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button
          color="primary"
          type="button"
          className="previous"
          onClick={previousPage}
        >
          Back
        </Button>
        <Button
          color="primary"
          type="submit"
          className="next"
          disabled={submitting}
        >
          Finish
        </Button>
      </ButtonToolbar>
    </form>
  );
};

export default connect((state) => ({
  myData: getFormValues("wizard")(state),
  initialValues: getFormInitialValues("wizard")(state),
}))(
  reduxForm({
    form: "wizard", //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  })(WizardFormTwo)
);
