import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import BvnAuth from "../../Auth/BvnAuth";
import PayoutHistory from "./components/PayoutHistory";
import { getHistory } from "../../../redux/actions/payoutActions";

const MyPayout = (props) => {
  const [year, setYear] = useState(new Date());
  const handleHistory = (date) => {
    setYear(date);
  };
  const getHistory = () => {
    const x = year.getUTCFullYear();
    
    props.getHistory(x);
  };
  return (
    <Container className="dashboard">
      {props.bvn_verified === true || props.bvnStatus === 200 ? (
        <>
          {" "}
          <Row>
            <Col md={12}>
              <h3 className="page-title">Payout</h3>
            </Col>
          </Row>
          <h3 className="bold-text" style={{ justifyContent: "center" }}>
            <Row>
              <Col md={12}>
                <PayoutHistory
                  history={props.history}
                  year={year}
                  getHistory={getHistory}
                  handleHistory={handleHistory}
                  isLoading={props.isLoading}
                />
              </Col>
            </Row>
          </h3>
        </>
      ) : (
          <BvnAuth />
        )}
    </Container>
  );
};

MyPayout.propTypes = {};

export default connect(
  (state) => ({
    bvn_verified: state.auth.user.bvn_verified,
    bvnStatus: state.auth.bvnStatus,
    history: state.payout.history,
    isLoading: state.payout.isLoading,
  }),
  { getHistory }
)(MyPayout);
