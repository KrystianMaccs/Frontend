import React, { PureComponent } from "react";
import { Field, reduxForm, Form } from "redux-form";
import { connect } from "react-redux";
import EyeIcon from "mdi-react/EyeIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button} from "reactstrap";

const required = (value) => (value ? undefined : "Required");
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
      style={{ height: "40px" }} className="form__form-group-field"
    />
    {touched &&
      ((error && <span style={{fontSize:"13px", color:"red"}}>{error}</span>) || (warning && <span style={{fontSize:"13px", color:"red"}}>{warning}</span>))}
  </div>
);

class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    errorMsg: PropTypes.string,
    fieldUser: PropTypes.string,
    typeFieldUser: PropTypes.string,
    form: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword(e) {
    e.preventDefault();
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }



  render() {
   
    const { handleSubmit, onSubmit, submitting } = this.props;
    const { showPassword } = this.state;
    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__form-group">
          <span className="form__form-group-label">Email</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="username"
              component={renderedField}
              type="email"
              label="example@mail.com"
              validate={required}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="password"
              component={renderedField}
              type={showPassword ? "text" : "password"}
              label="Password"
              validate={required}
            />
           { <button
              type="button"
              className={`form__form-group-button${
                showPassword ? " active" : ""
              }`}
              onClick={(e) => this.showPassword(e)}
            >
              <EyeIcon />
            </button>}
          </div>
        </div>

        <div className="account__btns">
          <Button
            className="account__btn"
            type="submit"
            color="#71e015"
            disabled={submitting}
            style={{ backgroundColor: "#9dc828" }}
          >
            Sign In
          </Button>
          <Link className="btn btn-primary account__btn" to="/register">
            Sign Up
          </Link>
          <br />
        </div>
      </Form>
    );
  }
}

export default connect()(reduxForm()(LogInForm));
