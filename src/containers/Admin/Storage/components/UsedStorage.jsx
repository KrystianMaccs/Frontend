import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { Card, CardBody, Col } from "reactstrap";
import MapMarkerRadiusIcon from "mdi-react/MapMarkerRadiusIcon";
//import PropTypes from "prop-types";

const data = [
  { value: 346, fill: "#71e015" },
  { value: 3654, fill: "#eeeeee" },
];

const UsedStorage = () => (
  <Col md={12} xl={4} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody className="dashboard__health-chart-card">
        <div className="card__title">
          <h5 className="bold-text card__title-center">Used Storage</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cy={85}
                innerRadius={80}
                outerRadius={90}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <MapMarkerRadiusIcon style={{ fill: "#71e015" }} />
            <p className="dashboard__health-chart-number">346</p>
            <p className="dashboard__health-chart-units">GB</p>
          </div>
        </div>
        <p className="dashboard__goal">Total Memory: 4000GB </p>
      </CardBody>
    </Card>
  </Col>
);

UsedStorage.propTypes = {};

export default UsedStorage;
