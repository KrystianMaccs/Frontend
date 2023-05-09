import React, { useEffect, useState } from "react";
import { Button, ButtonToolbar } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select from "react-select";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";
import { DatePickerInput } from "rc-datepicker";
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

const EditSong = (props) => {
  const searchClass = classNames({
    "topbar__search-field": true,
    "topbar__search-field--open": true,
  });
  const [genree, setGenre] = useState([]);
  const [accesss, setAccesss] = useState([]);
  const [label, setLabel] = useState([]);
  useEffect(() => {
    if (props.labels && props.labels.length > 0) {
      const l = props.labels.map((l, i) => ({
        value: l.title,
        label: l.title,
        title: l.title,
      }));
      setLabel(l);
    }
  }, [props.labels]);
  useEffect(() => {
    if (props.genre && props.genre.length > 0) {
      const g = props.genre.map((g, i) => ({
        value: g.title,
        label: g.title,
        title: g.title,
      }));
      setGenre(g);
    }
  }, [props.genre]);

  useEffect(() => {
    if (props.access && props.access.length > 0) {
      const a = props.access.map((a, i) => ({
        value: a.title,
        label: a.title,
        title: a.title,
      }));
      setAccesss(a);
    }
  }, [props.access]);

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "red",
        width: "300px",
        color: "#FFF",
        //cursor: "not-allowed",
      };
    },
  };
  return (
    <form>
      <div className="card__title">
        <h3 className="bold-text">Upload</h3>
        <h5 className="subhead">Fill in the form to upload your music</h5>
      </div>{" "}
      {props.music ? (
        <>
          <form className="form login-form">
            <div className="form__form-group">
              <span className="form__form-group-label">Pre Sales Date</span>

              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <CalendarBlankIcon />
                </div>
                <DatePickerInput
                  displayFormat="DD/MM/YYYY"
                  returnFormat="YYYY-MM-DD"
                  className="my-react-component"
                  onChange={props.handleStart}
                  style={{ height: "40px", width: "100%" }}
                  showOnInputClick
                  placeholder={"Pre Sales Date"}
                  locale="ng"
                  value={props.preSalesDate}
                  startMode="month"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Release Start Date</span>

              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <CalendarBlankIcon />
                </div>
                <DatePickerInput
                  displayFormat="DD/MM/YYYY"
                  returnFormat="YYYY-MM-DD"
                  className="my-react-component"
                  onChange={props.handleRelease}
                  style={{ height: "40px", width: "100%" }}
                  showOnInputClick
                  placeholder={"Release Start Date"}
                  locale="ng"
                  value={props.releaseStartDate}
                  startMode="month"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Release End Date</span>

              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <CalendarBlankIcon />
                </div>
                <DatePickerInput
                  displayFormat="DD/MM/YYYY"
                  returnFormat="YYYY-MM-DD"
                  className="my-react-component"
                  onChange={props.handleEnd}
                  style={{ height: "40px", width: "100%" }}
                  showOnInputClick
                  placeholder={"Release End Date"}
                  locale="ng"
                  value={props.releaseEndDate}
                  startMode="month"
                />
              </div>
            </div>{" "}
            <div className="form__form-group">
              <span className="form__form-group-label">Cover Image</span>

              <div className="form__form-group-field">
                <section className="container">
                  <div {...props.getRootProps({ className: "dropzone" })}>
                    <input {...props.getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                  <aside style={props.thumbsContainer}>{props.thumbs}</aside>
                </section>
              </div>
            </div>{" "}
            {/*  <Field name="cover" component={renderDropZone} /> */}
            <ButtonToolbar className="form__button-toolbar">
              <Button
                type="button"
                onClick={() => {
                  props.setMusic(false);
                }}
              >
                Back
              </Button>
            </ButtonToolbar>
          </form>{" "}
        </>
      ) : (
        <div>
          <div className="form__form-group">
            <span className="form__form-group-label">Genres</span>
            <div className="form__form-group-field">
              <Select
                isMulti
                options={genree}
                value={props.genres}
                onChange={props.handleGenre}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Access Availability</span>
            <div className="form__form-group-field">
              <Select
                styles={{ width: "100%" }}
                isMulti
                options={accesss}
                value={props.access_availability}
                onChange={props.handleAccess}
              />
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Title</span>
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
              <input
                type="text"
                placeholder="Description"
                required
                value={props.description}
                onChange={props.addDescription}
              />
            </div>
          </div>
          <div className="form__form-group">
            <div className="form__form-group form__form-group--address">
              <span className="form__form-group-label">Charge Type</span>

              <Select
                options={label}
                value={props.labe}
                onChange={props.handleLabel}
              />
            </div>
          </div>

          <ButtonToolbar className="form__button-toolbar">
            <Button
              color="primary"
              onClick={() => {
                props.setMusic(true);
              }}
            >
              Continue
            </Button>
          </ButtonToolbar>
        </div>
      )}
    </form>
  );
};

EditSong.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect((state) => ({
  /* errorMsg: state.user.error, */
}))(EditSong);
