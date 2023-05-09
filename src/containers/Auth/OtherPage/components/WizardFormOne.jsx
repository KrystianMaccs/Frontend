import React, { PureComponent } from "react";
import { Button, ButtonToolbar } from "reactstrap";
import Select from "react-select";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import MailIcon from "mdi-react/MailIcon";

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

class WizardFormOne extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      handleSubmit,
      handleChange,
      music_class,
      submitting,
      onSubmit,
    } = this.props;

    return (
      <form className="form wizard__form" onSubmit={handleSubmit(onSubmit)}>
        <h4 className="wizard__title">
          {" "}
          This registration makes you an MCSN Member
        </h4>
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
              validate={[ maxLength15]}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Address</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="address"
              component={renderedField}
              type="text"
              label="2 Adios St"
              validate={[required]}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Profession</span>
          <div className="form__form-group-field">
            <Select
              onChange={handleChange}
              style={{ width: "500px" }}
              name="nationality"
              options={[
                { value: "Song Writer", label: "Song Writer" },
                { value: "DJ", label: "DJ" },
                { value: "Producer", label: "Producer" },
                { value: "Musician", label: "Musician" },
                { value: "Composer", label: "Composer" },
              ]}
              clearable={false}
              className="react-selected"
              placeholder="Profession"
              classNamePrefix="react-select"
              value={music_class}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Stage Name</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="stage_name"
              component={renderedField}
              type="text"
              label="e.g. Bruno mars"
              validate={[required, maxLength15]}
            />
          </div>
        </div>

        <ButtonToolbar className="form__button-toolbar wizard__toolbar">
          <Button color="primary" type="button" disabled className="previous">
            Back
          </Button>
          <Button
            color="primary"
            type="submit"
            className="next"
            style={{ background: "#9dc828" }}
            disabled={submitting}
          >
            Next
          </Button>
        </ButtonToolbar>
      </form>
    );
  }
}

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
