import React, { PureComponent } from "react";
import { Col, Card, Row, CardBody } from "reactstrap";
import ProfilePage from "./components/ProfilePage";
import {
  updateBenefit,
  reverseBack,
} from "../../../redux/actions/beneficiaryAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Anime from "../../../shared/components/Anime";
import { toastr } from "react-redux-toastr";
const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class ProfileUpdate extends PureComponent {
  submit = (data) => {
    this.props.updateBenefit(data, this.props.profile.id);
  };

  render() {
    const { loading, isComplete, engaged, isVerified } = this.props;

    if (!engaged) {
      return <Redirect to="/login" />;
    }
    if (isComplete && isVerified) {
      return <Redirect to="/benefit_home" />;
    }
    if (isComplete && !isVerified) {
      return <Redirect to="/benefit_bvn" />;
    }
    return (
      <>
        {loading ? (
          <Anime loading={loading} />
        ) : (
          <>
            <div className="account account--photo"> </div>
            <div className="account__wrapper">
              <div className="account__wizard">
                <div className="account__head">
                  <img
                    src={icon}
                    alt="GoCreate"
                    height="100px"
                    weight="130px"
                  />
                  <h4
                    className="account__title"
                    style={{ textAlign: "center", marginTop: "12px" }}
                  >
                    Fill in your Personal Details
                  </h4>
                </div>
                <Row>
                  <Col md={12} lg={12}>
                    <Card>
                      <CardBody
                        style={{ boxShadow: "none", background: "none" }}
                      >
                        <ProfilePage onSubmit={this.submit} />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.beneficiary.loading,
  profile: state.beneficiary.beneficiary.profile,
  token: state.beneficiary.token,
  isComplete: state.beneficiary.isCompleted,
  engaged: state.beneficiary.engaged,
  beneficiary: state.beneficiary.beneficiary,
  isVerified: state.beneficiary.isVerified,
});
export default connect(mapStateToProps, { updateBenefit, reverseBack })(
  ProfileUpdate
);
