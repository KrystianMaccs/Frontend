import React, { PureComponent } from "react";
import { Field, reduxForm, Form, getFormValues } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import countries from "../../../containers/Auth/OtherPage/utils/countries";
import { Button } from "reactstrap";
import Select from "react-select"
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon"
import MaskedInput from "react-text-mask";

const renderField = ({
  input,
  placeholder,
  type,
  mask,
  className,
  guide = true,
  pipe,
  keepCharPositions = false,
  code,
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
);


class PhoneOtpForm extends PureComponent {
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
    const { onSubmit, handleSubmit, handleChange, code } = this.props;
    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__form-group form__form-group--address">
          <span className="form__form-group-label">Phone No.</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>

            <Field
              name="phone"
              component={renderField}
              type="text"
              mask={[
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
                /\d/,
              ]}
              className="phone-input"
              placeholder="Phone Number"
            />
            <Select
              onChange={handleChange}
              name="nationality"
              options={countries}
              clearable={false}
              className="react-select"
              placeholder="Nationality"
              classNamePrefix="react-select"
              style={{
                height: "40px",
              }}
              value={code}
            />
          </div>
        </div>
        <div className="account__btns">
          <Button
            className="account__btn"
            color="#71e015"
            submit="true"
            type="submit"
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
  myData: getFormValues("password_form")(state),
}))(reduxForm()(PhoneOtpForm));
