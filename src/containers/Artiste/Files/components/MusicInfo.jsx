import React from "react";
import { Card, CardBody, Col, Badge, Table } from "reactstrap";
import PropTypes from "prop-types";

const MusicInfo = ({ song }) => {
  return (
    <Col md={12} lg={12}>
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
            <h3 className="bold-text">My Music List</h3>
            <h5 className="subhead">
              Payout breakdown of <span className="red-text">songs</span>
            </h5>
          </div>
          <Table responsive className="table--bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Song</th>
                <th>Share</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {song === null
                ? "No Music Upload yet"
                : song.results.map((s, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{s.title}</td>
                        <td>
                          {s.royalties.map((r, index) => {
                            return `${r.description}:${r.share}, `;
                          })}
                        </td>
                        <td>
                          <Badge color="success">
                            {s.subscription === null
                              ? "Not in Subscription"
                              : "In Subscription"}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}

              {/*  <tr>
              <td>1</td>
              <td>Lazy Song</td>
              <td>Composer: 22%, Producer: 33% , Me:45% </td>
              <td><Badge color="success">Paid</Badge></td>
            </tr>
            <tr>
              <td>2</td>
              <td>24k Magic</td>
              <td>Composer: 22%, Producer: 33% , Me:45% </td>
              <td><Badge color="primary">Not Paid</Badge></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Treasure</td>
              <td>Composer: 22%, Producer: 33% , Me:45% </td>
              <td><Badge color="success">Partial Payment</Badge></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Finnesse</td>
              <td>Composer: 22%, Producer: 33% , Me:45% </td>
              <td><Badge color="primary">Paid</Badge></td>
            </tr> */}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

MusicInfo.propTypes = {
  t: PropTypes.func.isRequired,
};

export default MusicInfo;
