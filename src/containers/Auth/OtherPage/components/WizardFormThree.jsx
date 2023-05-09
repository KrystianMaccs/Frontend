import React from "react";
import { Button, ButtonToolbar, InputGroup } from "reactstrap";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import renderDropZoneField from "../../../../shared/components/form/DropZoneImage";

const WizardFormThree = ({ handleSubmit, previousPage, reset }) => (
  <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
    <h3 className="wizard__title">Upload your Profile Picture</h3>
    <InputGroup>
      <Field name="files" component={renderDropZoneField} />
    </InputGroup>
    <ButtonToolbar className="form__button-toolbar wizard__toolbar">
      <Button
        color="primary"
        type="button"
        className="previous"
        onClick={previousPage}
      >
        Back
      </Button>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </ButtonToolbar>
    <Button type="reset" onClick={reset}>
      Reset
    </Button>
  </form>
);

WizardFormThree.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "profile_pic_upload",
})(WizardFormThree);
