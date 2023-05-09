import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Button, ButtonToolbar } from "reactstrap";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import Select from "react-select";
import { renderField } from "../../../../shared/components/login/RegisterForm";
import CircularSlider from "@fseehawer/react-circular-slider";
import Icon from "../../../../shared/img/go_create.svg";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";
import countries from "../../../../containers/Auth/OtherPage/utils/countries";

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

const RoyalSpiltting = ({
  handleSubmit,
  song,
  addBeneficiary,
  share,
  handleChange,
  handleSelect,
  select,
  tot,
  disabled,
  rem,
  next,
  setNext,
  isLoading,
  code,
  handleCode,
}) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const s = song.results.map((s, i) => ({
      value: s,
      label: s.title,
    }));
    setSongs(s);
  }, [song.results]);

  
  return (
    <Col md={12} lg={6}>
      <LoadingOverlay
        active={isLoading}
        spinner={<PlainLogo />}
        text="Please Wait..."
      >
        <Card className="card--not-full-height">
          <CardBody
            style={{
              background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
              color: "#fff",
              fontWeight: "lighter",
              boxShadow: "-1px 1px 19px black",
            }}
          >
            <div >
              <h3 className="bold-text">Add a Beneficiary to your Royalty</h3>
              <h5 className="subhead">
                Fill in the form to Add your Song to a Subscription
              </h5>
            </div>{" "}
            <>
              {next ? (
                <form className="form" onSubmit={handleSubmit(addBeneficiary)}>
                  <div className="form__form-group">
                    <span className="form__form-group-label">Description</span>
                    <div className="form__form-group-field">
                      <Field
                        name="description"
                        component="textarea"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form__form-group">
                    <span className="form__form-group-label">Song</span>
                    <div className="form__form-group-field">
                      <Select
                        onChange={handleSelect}
                        name="nationality"
                        options={songs}
                        clearable={false}
                        className="react-select"
                        placeholder="My Songs"
                        classNamePrefix="react-select"
                        value={select}
                      />
                    </div>
                  </div>
                  {!disabled ? (
                    <div className="form__form-group">
                      <span className="form__form-group-label">{`Remaining Shares: ${rem}%`}</span>
                      <div className="form__form-group-field">
                        <Col
                          md={4}
                          lg={4}
                          xs={4}
                          style={{ marginLeft: "auto", marginRight: "auto" }}
                        >
                          <CircularSlider
                            min={tot}
                            max={100}
                            label="Share"
                            labelColor="#005a58"
                            knobColor="#00ff00"
                            progressColorFrom="#FEA346"
                            progressColorTo="#F8616D"
                            progressSize={24}
                            trackColor="#eeeeee"
                            appendToValue="%"
                            trackSize={24}
                            value={share}
                            dataIndex={share}
                            onChange={handleChange}
                            knobDraggable={true}
                          >
                            {" "}
                            <img src={Icon} />
                          </CircularSlider>
                        </Col>
                      </div>
                    </div>
                  ) : null}

                  <ButtonToolbar className="form__button-toolbar">
                    <Button color="primary" type="submit">
                      Add
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => {
                        setNext(false);
                      }}
                    >
                      Back
                    </Button>
                  </ButtonToolbar>
                </form>
              ) : (
                <>
                  <div className="form__form-group">
                    <span className="form__form-group-label">Email</span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <AccountOutlineIcon />
                      </div>
                      <Field
                        name="email"
                        component={renderedField}
                        type="email"
                        label="Email"
                        validate={[required]}
                      />
                    </div>
                  </div>
                  <div className="form__form-group">
                    <span className="form__form-group-label">Full Name</span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <AccountOutlineIcon />
                      </div>
                      <Field
                        name="fullname"
                        component={renderedField}
                        type="text"
                        label="Full Name"
                        validate={[required]}
                        warn={[alphaNumeric]}
                      />
                    </div>
                  </div>
                  <div className="form__form-group form__form-group--address">
                    <span className="form__form-group-label">Phone</span>
                    <div className="form__form-group-field">
                      <Select
                        onChange={handleCode}
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
                        defaultValue={{
                          value: "2",
                          label: "Andhra Pradesh",
                          country_id: "101",
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
                  <ButtonToolbar className="form__button-toolbar">
                    <Button
                      color="primary"
                      onClick={() => {
                        setNext(true);
                      }}
                    >
                      Continue
                    </Button>
                  </ButtonToolbar>
                </>
              )}
            </>
          </CardBody>
        </Card>
      </LoadingOverlay>
    </Col>
  );
};

RoyalSpiltting.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "splitting_form", // a unique identifier for this form
})(
  connect((state) => ({
    // myvalues: getFormValues("splitting_form")(state),
  }))(RoyalSpiltting)
);
