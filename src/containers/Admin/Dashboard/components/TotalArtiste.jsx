import React from "react";
import { Col, Card, CardBody, Media } from "reactstrap";
import AccountIcon from "mdi-react/AccountIcon";

const TotalArtiste = ({ artisteNo }) => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody
        className="px-3 py-3"
        style={{
          background: "linear-gradient(45deg, #843cf7, #38b8f2)",
          color: "#fff",
          fontWeight: "lighter",
          boxShadow: "-1px 1px 19px black",
        }}
      >
        <Media>
          <Media body>
            <h3>{artisteNo}</h3>
            <span>Total Artistes</span>
          </Media>
          <AccountIcon size={66} />
        </Media>
      </CardBody>
    </Card>
  </Col>
);

TotalArtiste.propTypes = {};

export default TotalArtiste;
