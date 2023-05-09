import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import FlashIcon from "mdi-react/FlashIcon";
import { Col, Card, CardBody } from "reactstrap";
//import PropTypes from "prop-types";

const AlbumUploaded = ({ t }) => (
  <Col md={12} xl={4} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody className="dashboard__health-chart-card">
        <div className="card__title">
          <h5 className="bold-text card__title-center">Album Uploaded</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <FlashIcon style={{ fill: "#1b5671" }} />
            <p className="dashboard__health-chart-number">34</p>
            {/*  <p className='dashboard__health-chart-units'>mb</p> */}
          </div>
        </div>
        {/*  <p className='dashboard__goal'>Total: 200 mb</p> */}
      </CardBody>
    </Card>
  </Col>
);

AlbumUploaded.propTypes = {};

export default AlbumUploaded;
