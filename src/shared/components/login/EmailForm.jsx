import React, { PureComponent } from "react";
import { Field, reduxForm, Form } from "redux-form";
import { connect } from "react-redux";
import MailIcon from "mdi-react/MailIcon";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

class EmailForm extends PureComponent {
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
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword(e) {
    e.preventDefault();
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }

  handleSubmit = (e) => (values) => {
    e.preventDefault();
  };

  render() {
    const {
      handleSubmit,
      onSubmit,
      /* errorMessage,
      errorMsg,
      */
    } = this.props;

    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        {/*   <Alert color='danger' isOpen={!!errorMessage || !!errorMsg}>
          {errorMessage}
          {errorMsg}
        </Alert> */}
        <div className="form__form-group">
          <span className="form__form-group-label">Email</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="example@mail.com"
            // onChange={e => this.setState({email:e.target.value})}
            />
          </div>
        </div>
        <div className="account__btns">
          <Button
            className="account__btn"
            submit="true"
            style={{ backgroundColor: "#9dc828" }}
          >
            Verify
          </Button>
        </div>
      </Form>
    );
  }
}

export default connect((state) => ({
  /* errorMsg: state.user.error, */
}))(reduxForm()(EmailForm));
