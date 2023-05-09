import React from "react"
import { Col, Card, CardBody , Media} from "reactstrap";

import AccountHeartIcon from "mdi-react/AccountHeartIcon";

//import PropTypes from "prop-types";

const ActiveArtiste = () => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12} style={{}}>
      <Card>
      <CardBody
        className="px-3 py-3"
        style={{
          background: "linear-gradient(45deg, #43a047, #1de9b6)",
          color: "#fff",
          fontWeight:"lighter"
        }}
      >
        <Media>
          <Media body>
            <h3>24</h3>
            <span>Active Artiste</span>
          </Media>
          <AccountHeartIcon size={66}/>
        </Media>
      </CardBody>
    </Card>
  </Col>
);

ActiveArtiste.propTypes = {};

export default ActiveArtiste;
