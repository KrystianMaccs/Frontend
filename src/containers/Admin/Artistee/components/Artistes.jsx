import React from "react";

import { Col, Card, CardBody, Media } from "reactstrap";

import AccountIcon from "mdi-react/AccountIcon";

const Artistes = () => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody
        className="px-3 py-3"
        style={{
          background: " linear-gradient(45deg,#cc2b5e,   #753a88)",
          color: "#fff",
          fontWeight: "lighter",
        }}
      >
        <Media>
          <Media body>
            <h3>45</h3>
            <span> Artistes</span>
          </Media>
          <AccountIcon size={66} />
        </Media>
      </CardBody>
    </Card>
  </Col>
);

Artistes.propTypes = {};

export default Artistes;
