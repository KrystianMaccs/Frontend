import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import FlashIcon from "mdi-react/FlashIcon";
import { Col, Card, CardBody } from "reactstrap";
//import PropTypes from "prop-types";

const data = [
  { value: 109, fill: "#FF0000" },
  { value: 91, fill: "#eeeeee" },
];

const Royalties = ({ t }) => (
  <Col md={12} xl={4} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody
        className="dashboard__health-chart-card"
        style={{
          background:
            "linear-gradient(rgba(204, 43, 94, 0.4), rgba(117, 58, 136, 0.5)",
          boxShadow: "-1px 1px 19px black",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="card__title">
          <h5 className="bold-text card__title-center">Royalties</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cy={85}
                innerRadius={85}
                outerRadius={90}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <FlashIcon style={{ fill: "#1b5671" }} />
            <p className="dashboard__health-chart-number">10:45</p>
            {<p className="dashboard__health-chart-units">days</p>}
          </div>
        </div>
        <p className="dashboard__goal">Naira</p>
      </CardBody>
    </Card>
  </Col>
);

Royalties.propTypes = {};

export default Royalties;
