import React from "react";
import { Col, Card, CardBody, Media } from "reactstrap";

import FileMusicIcon from "mdi-react/FileMusicIcon";

//import PropTypes from "prop-types";

const FeaturedAlbum = ({ user }) => (
  <Col md={12} xl={4} lg={6} sm={12} xs={12} style={{}}>
    <Card>
      <CardBody
        className="px- py-3"
        style={{
          background: "linear-gradient(45deg, #42275a, #734b6d)",
          color: "#fff",
          fontWeight: "lighter",
          boxShadow: "-1px 1px 19px black",
        }}
      >
        <Media>
          <Media body>
            <h3>{user.storage.total_space - user.storage.used_space} mb</h3>
            <span style={{ fontSize: "21px" }}>Remaining Storage</span>
          </Media>
          <FileMusicIcon size={66} />
        </Media>
      </CardBody>
    </Card>
  </Col>
);

FeaturedAlbum.propTypes = {};

export default FeaturedAlbum;
