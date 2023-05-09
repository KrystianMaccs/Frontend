/* eslint-disable react/no-children-prop */
import React, { PureComponent } from "react";
import { Button } from "reactstrap";
import { Field, reduxForm, Form } from "redux-form";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from "react-select";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

class ProfileSettings extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
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
    const {
      handleSubmit,
      onSubmit,
      handleClass,
      music_class,
      isLoading,
    } = this.props;

    return (
      <LoadingOverlay
        active={isLoading}
        spinner={<PlainLogo />}
        text="Please Wait..."
      >
        <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__form-group">
            <span className="form__form-group-label">First Name</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <AccountOutlineIcon />
              </div>
              <Field
                name="first_name"
                component="input"
                type="text"
                placeholder="First Name"
                // onChange={e => this.setState({email:e.target.value})}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Last Name</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <AccountOutlineIcon />
              </div>
              <Field
                name="last_name"
                component="input"
                type="text"
                placeholder="Last Name"
                // onChange={e => this.setState({email:e.target.value})}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Phone No.</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <AccountOutlineIcon />
              </div>
              <Field
                name="phone"
                component="input"
                type="text"
                placeholder="e.g + 234 8033 339 267"
                // onChange={e => this.setState({email:e.target.value})}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Email</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <AccountOutlineIcon />
              </div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="example@mail.com"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Stage Name</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <AccountOutlineIcon />
              </div>
              <Field
                name="stage_name"
                component="input"
                type="text"
                placeholder="example@mail.com"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Profession</span>
            <div className="form__form-group-field">
              <Select
                onChange={handleClass}
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
            <span className="form__form-group-label">Bio</span>
            <div className="form__form-group-field">
              <Field name="bio" component="textarea" type="text" />
            </div>
          </div>

          <div className="account__btns">
            <Button className="account__btn" submit="true" color="primary">
              Update
            </Button>
          </div>
        </Form>
      </LoadingOverlay>
    );
  }
}
const mapStateToProps = (state) => ({
  initialValues: state.auth.user, // retrieve name from redux store
});

export default connect(mapStateToProps)(reduxForm()(ProfileSettings));
