import React from "react";
import { Col, Card, CardBody, Media } from "reactstrap";

import MusicIcon from "mdi-react/MusicIcon";

//import PropTypes from "prop-types";

const Eps = () => (
  <Col md={12} xl={4} lg={6} sm={12} xs={12} style={{}}>
    <Card>
      <CardBody
        className="px-3 py-3"
        style={{
          background: "linear-gradient(45deg, #3a1c71,#d76d77,  #ffaf7b)", 
          color: "#fff",
          fontWeight: "lighter",
          boxShadow: "-1px 1px 19px black",
        }}
      >
        <Media>
          <Media body>
            <h3>0</h3>
            <span style={{ fontSize: "21px" }}>EP's</span>
          </Media>
          <MusicIcon size={66} />
        </Media>
      </CardBody>
    </Card>
  </Col>
);

Eps.propTypes = {};

export default Eps;
