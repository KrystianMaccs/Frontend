import React, { PureComponent } from "react";
import { Field, reduxForm, Form, getFormValues } from "redux-form";
import { connect } from "react-redux";
import MailIcon from "mdi-react/MailIcon";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  Row,
  ButtonToolbar
} from "reactstrap";
import EyeIcon from "mdi-react/EyeIcon";

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

const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";
const confirmPassword = (values) =>
  values.confirmpassword !== values.password
    ? "Password does not match"
    : undefined;
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(8);

class PasswordForm extends PureComponent {
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
      show: false,
      popoverOpen: false,
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword(e) {
    e.preventDefault();
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }
  showToggle = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };
  onClick = (e) => (values) => {
    e.preventDefault();
    localStorage.setItem("GoCurrentUser", "artiste");
    this.setState({ auth: true });
  };
  toggle = () => {
    this.setState((prevState) => ({ popoverOpen: !prevState.popoverOpen }));
  };

  render() {
    const { showPassword, show } = this.state;
    const { onSubmit, handleSubmit, submitting } = this.props;
    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        <Modal
          isOpen={show}
          toggle={this.showToggle}
          modalClassName={`ltr-support`}
          className={`modal-dialog modal-dialog--primary `}
        >
          <div className="modal__header">
            <button
              className="lnr lnr-cross modal__close-btn"
              type="button"
              onClick={this.showToggle}
            />

            <h4 className="text-modal  modal__title">Terms and Conditions</h4>
          </div>
          <div className="modal__body">
            <Row></Row>
          </div>
          <ButtonToolbar className="modal__footer">
            <Button className="modal_cancel" onClick={this.showToggle}>
              Cancel
            </Button>{" "}
            <Button className="account__btn" submit="true" color="primary">
              Create
            </Button>
          </ButtonToolbar>
        </Modal>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="password"
              component={renderedField}
              validate={[required, minLength2]}
              type={showPassword ? "text" : "password"}
              label="Password"
            />
            {
              <button
                type="button"
                className={`form__form-group-button${
                  showPassword ? " active" : ""
                }`}
                onClick={(e) => this.showPassword(e)}
              >
                <EyeIcon />
              </button>
            }
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Confirm Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="confirm_password"
              component={renderedField}
              type={showPassword ? "text" : "password"}
              label=" Confirm Password"
              validate={[required, minLength2, confirmPassword]}
            />
            {
              <button
                type="button"
                className={`form__form-group-button${
                  showPassword ? " active" : ""
                }`}
                onClick={(e) => this.showPassword(e)}
              >
                <EyeIcon />
              </button>
            }
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
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

export default connect((state) => ({
  reg: state.auth.reg,
  myData: getFormValues("password_form")(state),
}))(reduxForm()(PasswordForm));
