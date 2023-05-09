import React, { PureComponent } from "react";
import { Field, reduxForm, Form, getFormValues } from "redux-form";
import { connect } from "react-redux";
import MailIcon from "mdi-react/MailIcon";
import PropTypes from "prop-types";
import {
  Button,
} from "reactstrap";
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

class OtpForm extends PureComponent {
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
   // localStorage.setItem("GoCurrentUser", "artiste");
    this.setState({ auth: true });
  };
  toggle = () => {
    this.setState((prevState) => ({ popoverOpen: !prevState.popoverOpen }));
  };

  render() {
    
    const { onSubmit, handleSubmit } = this.props;
    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__form-group">
          <span className="form__form-group-label">Otp</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="otp"
              component={renderField}
              type="text"
              mask={[
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
               
              ]}
              className="phone-input"
              placeholder="One Time Pin"
            />
          </div>
        </div>
        <div className="account__btns">
          <Button
            className="account__btn"
            onClick={this.onClick}
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
}))(reduxForm()(OtpForm));
