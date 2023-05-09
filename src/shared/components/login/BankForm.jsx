import React, { PureComponent } from "react";
import { Field, reduxForm, Form } from "redux-form";
import { connect } from "react-redux";
import MailIcon from "mdi-react/MailIcon";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import renderSelectField from "../../../shared/components/form/Select";
import bank from "../../../containers/Auth/BvnAuth/utils/bank";

class BankForm extends PureComponent {
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
      verify: false,
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

  onClick = (e) => {
    e.preventDefault();
    this.setState({ verify: true });
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__form-group">
          <span className="form__form-group-label">Account No.</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="account_number"
              component="input"
              type="text"
              placeholder="e.g. 3556563229"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Bank Name</span>
          <div className="form__form-group-field">
            <Field
              name="bank_name"
              component={renderSelectField}
              options={bank}
              classname="react-selected"
            />
          </div>
        </div>
      {/*   <div className="form__form-group">
          <span className="form__form-group-label">BVN No.</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailIcon />
            </div>
            <Field
              name="bvn"
              component="input"
              type="text"
              placeholder="0000000000"
            />
          </div>
        </div> */}
        <div className="account__btns">
          <Button
            className="account__btn"
            submit="true"
            style={{ backgroundColor: "#9dc828" }}
          >
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

export default connect()(reduxForm()(BankForm));
