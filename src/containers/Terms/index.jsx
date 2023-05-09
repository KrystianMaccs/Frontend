import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {  Redirect } from "react-router";
import { connect } from "react-redux";
import EmailIcon from "mdi-react/EmailIcon";
import TextBoxCheckOutlineIcon from "mdi-react/TextBoxCheckOutlineIcon";
import { Card, CardBody, ButtonToolbar, Col } from "reactstrap";

class EmailConfirmation extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  state = {
    error: "",
  };
  onSubmit = (data) => {
    for (var value in data) {
      if (data[value] == null) return null;
    }
    this.props.register(data);
  };
  render() {
    const {user} = this.props
    return (
      <>
        <div className="account account--photo"></div>
        <div className="account__wrapper">
          <Col md={12}>
            <Card>
              <CardBody>
                <div className="email-confirmation">
                  <div className="email-confirmation__icon">
                    <TextBoxCheckOutlineIcon className="email-confirmation__mail" />
                  </div>
                  <h3 className="email-confirmation__title">
                   Terms and Conditions
                  </h3>
                  <p className="email-confirmation__sub">
                    This application is authorized by The MUSICAL COPYRIGHT SOCIETY NIGERIA (MCSN) and protected by PAYSTACK. This application aims at stopping musical copyright infringement as a result of this we will use BVN BANK VERIFICATION NUMBER to verify user IDENTITIES.

PLEASE NOTE: BANK VERIFICATION NUMBERS OF USERS ARE NEITHER STORED OR DISTRIBUTED. THE BANK VERIFICATION NUMBERS MUST MATCH THE NAMES AND ACCOUNT NUMBERS PROVIDED FOR VERIFICATION TO BE VALID</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});
export default (connect(mapStateToProps)(EmailConfirmation));
