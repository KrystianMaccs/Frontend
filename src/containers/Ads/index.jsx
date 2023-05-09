import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Ad from "./components/Ad";

const index = ({ publish }) => {
  return (
    <div>
      <Row>
        <Col />
        <Col>
          <Ad publish={publish} />
        </Col>
      </Row>
    </div>
  );
};

export default connect((state) => ({
  publish: state.advert.publish,
}))(index);
