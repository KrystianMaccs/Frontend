import React from "react";
import { Col, Card, CardBody, Media } from "reactstrap";

import FileMusicIcon from "mdi-react/FileMusicIcon";

//import PropTypes from "prop-types";

const TotalMusic = (props) => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody
        className="px-3 py-3"
        style={{
          background: "linear-gradient(45deg, #9B3cb7, #FF396f)",
          color: "#fff",
          fontWeight: "lighter",
          boxShadow: "-1px 1px 19px black",
        }}
      >
        <Media>
          <Media body>
            <h3>{props.plan}</h3>
            <span>Advert Plans</span>
          </Media>
          <FileMusicIcon size={66} />
        </Media>
      </CardBody>
    </Card>
  </Col>
);

TotalMusic.propTypes = {};

export default TotalMusic;
