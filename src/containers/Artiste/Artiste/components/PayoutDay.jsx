import React from "react";
import { Col, Card, CardBody, Media } from "reactstrap";

import CurrencyNgnIcon from "mdi-react/CurrencyNgnIcon";

//import PropTypes from "prop-types";

const PayoutDay = () => (
  <Col md={12} xl={4} lg={6} sm={12} xs={12} style={{}}>
    <Card>
      <CardBody
        className="px-3 py-3"
        style={{
          background: "linear-gradient(45deg, #43a047, #1de9b6)",
          color: "#fff",
          fontWeight: "lighter",
          boxShadow: "-1px 1px 19px black",
        }}
      >
        <Media>
          <Media body>
            <h3>0</h3>
            <span>Royalties</span>
          </Media>
          <CurrencyNgnIcon size={66} />
        </Media>
      </CardBody>
    </Card>
  </Col>
);

PayoutDay.propTypes = {};

export default PayoutDay;
