import React from "react";
import { Button, ButtonToolbar, Modal, Row } from "reactstrap";
import { Field, reduxForm, Form } from "redux-form";
import { connect } from "react-redux";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import AccountIcon from "mdi-react/AccountIcon";
//import PropTypes from "prop-types";
import MailIcon from "mdi-react/MailIcon";

const AddModal = ({ modal, toggle, onSubmit }) => (
  <div>
    <Button
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
    </Button>
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

          <h4 className="text-modal  modal__title">Add Artist</h4>
        </div>
        <div className="modal__body">
          <Row>
            {/*   <Alert color='danger' isOpen={!!errorMessage || !!errorMsg}>
          {errorMessage}
          {errorMsg}
        </Alert> */}
            <div className="form__form-group">
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <Field
                  name="firstname"
                  component="input"
                  type="text"
                  placeholder="First Name"
                  // onChange={e => this.setState({email:e.target.value})}
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountIcon />
                </div>
                <Field
                  name="lastname"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                  // onChange={e => this.setState({email:e.target.value})}
                />
              </div>
            </div>
            <div className="form__form-group">
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
}))(reduxForm()(AddModal));
