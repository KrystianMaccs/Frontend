/* eslint-disable react/no-children-prop */
import React, { PureComponent } from "react";
import { Button } from "reactstrap";
import { Field, reduxForm, Form } from "redux-form";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import PhoneIcon from 'mdi-react/PhoneIcon'
import { connect } from "react-redux";
import MaskedInput from "react-text-mask";

export const renderField = ({
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

class EditProfile extends PureComponent {
  render() {
    const {
      handleSubmit,
      onSubmit,
      first_name,
      last_name,
      phone,
      other_names,
    } = this.props;

    return (
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
              placeholder={first_name}
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
              placeholder={last_name}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Other Names</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="other_names"
              component="input"
              type="text"
              placeholder={other_names  || "Other Name"}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Phone Number</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <PhoneIcon />
            </div>
            <Field
              name="phone"
              component="input"
              type="text"
              placeholder={phone}
            />
          </div>
        </div>

        <div className="form__form-group">
          <span className="form__form-group-label">Bio</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="bio"
              component="input"
              type="textarea"
              placeholder=" Bio"
            />
          </div>
        </div>

        <div className="account__btns">
          <Button className="account__btn" submit="true" color="primary">
            Update
          </Button>
        </div>
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialValues: {
      first_name: state.beneficiary.beneficiary
        ? state.beneficiary.beneficiary.profile.first_name
        : null,
      last_name: state.beneficiary.beneficiary
        ? state.beneficiary.beneficiary.profile.last_name
        : null,
      other_names: state.beneficiary.beneficiary
        ? state.beneficiary.beneficiary.profile.other_names
        : null,
      phone: state.beneficiary.beneficiary
        ? state.beneficiary.beneficiary.phone
        : null,
      bio: state.beneficiary.beneficiary
        ? state.beneficiary.beneficiary.profile.bio
        : null,
    },
  }; // retrieve name from redux store
};

export default connect(mapStateToProps)(
  reduxForm({ form: "profile_settings_form", enableReinitialize: true })(
    EditProfile
  )
);
