import React from "react";
import { Col, Card, CardBody, Media } from "reactstrap";

import MusicIcon from "mdi-react/MusicIcon";

//import PropTypes from "prop-types";

const TotalMusic = ({ songNo }) => (
  <Col md={12} xl={4} lg={6} sm={12} xs={12} style={{}}>
    <Card>
      <CardBody
        className="px-3 py-3"
        style={{
          background: "linear-gradient(45deg, #ee0979, #ff6a00)",
          color: "#fff",
          fontWeight: "lighter",
          boxShadow: "-1px 1px 19px black",
        }}
      >
        <Media>
          <Media body>
            <h3>{songNo}</h3>
            <span>Total Music</span>
          </Media>
          <MusicIcon size={66} />
        </Media>
      </CardBody>
    </Card>
  </Col>
);

TotalMusic.propTypes = {};

export default TotalMusic;
