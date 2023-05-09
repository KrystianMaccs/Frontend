/* eslint-disable react/no-children-prop */
import React from "react";
import { Button } from "reactstrap";
import { Field, reduxForm, Form } from "redux-form";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import { connect } from "react-redux";
import states from "../../../Auth/OtherPage/utils/states";
import Select from "react-select";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

const ProfileLocale = ({
  handleSubmit,
  onSubmit,
  lga,
  sor,
  handleLga,
  handleState,
  isLoading
}) => {
  return (
    <LoadingOverlay
    active={isLoading}
    spinner={<PlainLogo />}
    text="Please Wait..."
  >
    <Form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__form-group">
        <span className="form__form-group-label">State of Residence</span>
        <div className="form__form-group-field">
          <Select
            onChange={handleState}
            name="state"
            options={states}
            clearable={false}
            className="react-selected"
            placeholder="State"
            classNamePrefix="react-select"
            value={sor}
          />
        </div>
      </div>
      {sor !== null ? (
        <div className="form__form-group">
          <span className="form__form-group-label">Local Government Area</span>
          <div className="form__form-group-field">
            <Select
              onChange={handleLga}
              name="nationality"
              options={sor.locals}
              clearable={false}
              className="react-selected"
              placeholder="L.G.A"
              classNamePrefix="react-select"
              value={lga}
            />
          </div>
        </div>
      ) : null}

      <div className="form__form-group">
        <span className="form__form-group-label">Address</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <AccountOutlineIcon />
          </div>
          <Field
            name="address"
            component="input"
            type="text"
            placeholder="e.g 2 waya close"
          />
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
};

const mapStateToProps = (state) => ({
  initialValues: state.auth.user, // retrieve name from redux store
});

export default connect(mapStateToProps)(reduxForm()(ProfileLocale));
