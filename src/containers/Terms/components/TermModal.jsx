import React from "react";
import { Button, ButtonToolbar, Modal, Row } from "reactstrap";
import { Field, reduxForm, Form } from "redux-form";
import { connect } from "react-redux";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import AccountIcon from "mdi-react/AccountIcon";
//import PropTypes from "prop-types";
import MailIcon from "mdi-react/MailIcon";
import renderCheckBoxField from "../../../shared/components/form/CheckBox";

const TermModal = ({ modal, toggle, onSubmit }) => (
  <div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Field
              name="terms"
              onClick={toggle}
              component={renderCheckBoxField}
              label="I accept terms and Condition"
              className="colored-click"
            />
          </div>
        </div>
   {/*  <Button
      color="primary"
      className="rounded"
      onClick={toggle}
      style={{
        justifyItems: "center",
        backgroundColor: "#0c2ab4",
        borderColor: "#0c2ab4",
      }}
    >
      Add Artiste
    </Button> */}
    <Form className="form login-form" onSubmit={onSubmit}>
      <Modal
        isOpen={modal}
        toggle={toggle}
        modalClassName={`ltr-support`}
        className={`modal-dialog modal-dialog--primary `}
      >
        <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            type="button"
            onClick={toggle}
          />

          <h4 className="text-modal  modal__title">Terms and Conditions</h4>
        </div>
        <div className="modal__body">
          <Row>
         
          </Row>
        </div>
        <ButtonToolbar className="modal__footer">
          <Button className="modal_cancel" onClick={toggle}>
            Cancel
          </Button>{" "}
          <Button className="account__btn" submit="true" color="primary">
            Create
          </Button>
        </ButtonToolbar>
      </Modal>
    </Form>
  </div>
);

export default connect((state) => ({
  /* errorMsg: state.user.error, */
}))(reduxForm()(TermModal));
