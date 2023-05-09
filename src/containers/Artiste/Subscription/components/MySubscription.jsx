import React from "react";
import { Card, CardBody, Col, Badge, Table } from "reactstrap";
import PropTypes from "prop-types";

const MySubscriptions = ({ mySubscription }) => (
  <Col md={12} lg={8}>
    <Card>
      <CardBody
        style={{
          background: "linear-gradient(45deg, #843cf7, #38b8f2)",
          color: "#fff",
          fontWeight: "lighter",
          boxShadow: "-1px 1px 19px black",
        }}
      >
        <div className="card__title">
          <h3 className="bold-text">Songs distributed</h3>
          <h5 className="subhead">
            Payout breakdown of <span className="red-text">songs</span>
          </h5>
        </div>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Offer</th>
              <th>No. of Songs</th>
              <th>Last Renewed</th>
            </tr>
          </thead>
          <tbody>
            {mySubscription.length < 1
              ? "No Music Subscription yet"
              : mySubscription.map((ms, i) => {
                  return (
                    <tr>
                      <td> {i + 1}</td>
                      <td> {ms.package.title}</td>
                      <td> {ms.songs_added}</td>
                      <td>
                        {" "}
                        {ms.last_renewed === null ? "null" : ms.last_renewed}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

MySubscriptions.propTypes = {
  t: PropTypes.func.isRequired,
};

export default MySubscriptions;
