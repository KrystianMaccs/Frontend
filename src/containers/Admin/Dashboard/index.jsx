import React, { PureComponent } from "react";
import { Col, Row, Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TotalMusic from "./components/TotalMusic";
import TotalArtiste from "./components/TotalArtiste";
import Payout from "./components/Album";
import Album from "./components/Payout";

class Dashboard extends PureComponent {
  render() {
    const { isAuthenticated } = this.props.auth;
    const { artisteNo, charges, packages, plan } = this.props;
    if (!isAuthenticated) {
      return <Redirect to="/log_in" />;
    }
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <TotalArtiste artisteNo={artisteNo} />
          <TotalMusic charges={charges} />
          <Album packages={packages} />

          <Payout plan={plan.count} />
        </Row>
      </Container>
    );
  }
}

Dashboard.propTypes = {};

export default connect((state) => ({
  auth: state.auth,
  artisteNo: state.admin.artisteNo,
  charges: state.payout.charges,
  packages: state.songs.subscription,
  plan: state.advert.plan,
}))(Dashboard);
