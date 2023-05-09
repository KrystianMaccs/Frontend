import React from "react";
import { Col, Card, CardBody, Media } from "reactstrap";

import FileMusicIcon from "mdi-react/FileMusicIcon";

//import PropTypes from "prop-types";

const Albums = ({ albumNo }) => (
  <Col md={12} xl={4} lg={6} sm={12} xs={12}>
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
            <h3>{albumNo || 0}</h3>
            <span>Distribution plans</span>
          </Media>
          <FileMusicIcon size={66} />
        </Media>
      </CardBody>
    </Card>
  </Col>
);

Albums.propTypes = {};

export default Albums;
