import React, { PureComponent } from "react";
import { Col, Row, Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AdvertList from "./components/AdvertList";
import AdvertPlanList from "./components/AdvertPlanList";

const Adverts = (props) => {
  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">Adverts</h3>
        </Col>
      </Row>
      <Row>
        <AdvertPlanList
          plan={props.plan ? props.plan.results : null}
          isLoading={props.isLoading}
        />
           <AdvertList
          advert={props.advert ? props.advert.results : null}
          isLoading={props.isLoading}
          plan={props.plan ? props.plan.results : null}
        /> 
      </Row>
    </Container>
  );
};

export default connect((state) => ({
  plan: state.advert.plan,
  advert: state.advert.advert,
  isLoading: state.advert.isLoading,
}))(Adverts);
