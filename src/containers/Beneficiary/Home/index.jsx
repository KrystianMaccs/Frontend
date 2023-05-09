import React, { PureComponent } from "react";
import { Col, Card, Row, CardBody } from "reactstrap";
import {
  updateBenefit,
  bankBenefit,
} from "../../../redux/actions/beneficiaryAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Anime from "../../../shared/components/Anime";
import RoyaltyList from "./components/RoyaltyList";
import Tabs from "./components/Tabs";

class Home extends PureComponent {
  submit = (data) => {
    this.props.updateBenefit(data, this.props.profile.id);
  };

  render() {
    const {
      loading,
      benefit,
      beneficiary,
      engaged,
      updateBenefit,
      bankBenefit,
    } = this.props;

    if (!engaged) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        {loading ? (
          <Anime loading={loading} />
        ) : (
          <>
            <div className="account account--photo"> </div>
            <div className="account__wrapper">
              <Row>
                <Col sm={12} xl={7} md={12}>
                  {
                    <RoyaltyList
                      benefit={benefit}
                      loading={loading}
                      beneficiary={beneficiary}
                    />
                  }
                </Col>
                <Col sm={12} xl={5} md={12}>
                  <Tabs
                    beneficiary={beneficiary}
                    bankBenefit={bankBenefit}
                    updateBenefit={updateBenefit}
                    id={beneficiary.profile.id}
                  />
                </Col>
              </Row>
            </div>
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.beneficiary.loading,
  benefit: state.beneficiary.benefit,
  isVerified: state.beneficiary.isVerified,
  beneficiary: state.beneficiary.beneficiary,
  engaged: state.beneficiary.engaged,
});
export default connect(mapStateToProps, {
  updateBenefit,
  bankBenefit,
})(Home);
