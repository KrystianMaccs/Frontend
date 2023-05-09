import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EmailIcon from "mdi-react/EmailOutlineIcon";
import CheckboxMarkedCircleIcon from "mdi-react/CheckboxMarkedCircleIcon";
import { Card, CardBody, Col } from "reactstrap";

class EmailConfirmation extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  state = {
    error: "",
  };
  render() {
    return (
      <>
        <div className="account account--photo"></div>
        <div className="account__wrapper">
          <Col md={12}>
            <Card>
              <CardBody>
                <div className="email-confirmation">
                  <div className="email-confirmation__icon">
                    <EmailIcon className="email-confirmation__mail" />
                    <CheckboxMarkedCircleIcon className="email-confirmation__check" />
                  </div>
                  <h3 className="email-confirmation__title" color="#fff">
                    An Email has been sent to your mail{" "}
                  </h3>
                  <p className="email-confirmation__sub"></p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default (connect(mapStateToProps)(EmailConfirmation));
