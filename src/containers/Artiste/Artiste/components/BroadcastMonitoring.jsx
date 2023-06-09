/* eslint-disable no-underscore-dangle,react/no-did-mount-set-state */
import React, { PureComponent } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

const initialState = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Airing 1",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "#36A2EB",
      color: "#1b5671",
      borderColor: "#1b5671",
      borderWidth: 2,
      pointBackgroundColor: "#36A2EB",
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "Airing 2",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      borderWidth: 2,
      pointBackgroundColor: "#FF6384",
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5, 7, 54, 32, 87, 45, 25],
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgb(204, 204, 204)",
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: "rgb(204, 204, 204)",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgb(204, 204, 204)",
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: "rgb(204, 204, 204)",
        },
      },
    ],
  },
};

class BroadcastMonitoring extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: initialState,
      intervalId: null,
    };
  }

  componentDidMount() {
    const _this = this;

    const intervalId = setInterval(() => {
      const oldDataSet = _this.state.data.datasets[0];
      const newData = [];

      for (let x = 0; x < _this.state.data.labels.length; x += 1) {
        newData.push(Math.floor(Math.random() * 100));
      }

      const newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;

      const oldDataSet2 = _this.state.data.datasets[1];
      const newData2 = [];

      for (let x = 0; x < _this.state.data.labels.length; x += 1) {
        newData2.push(Math.floor(Math.random() * 100));
      }

      const newDataSet2 = {
        ...oldDataSet2,
      };

      newDataSet2.data = newData2;

      const newState = {
        ...initialState,
        data: {
          datasets: [newDataSet, newDataSet2],
          labels: _this.state.data.labels,
        },
      };

      _this.setState(newState);
    }, 4000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  render() {
    const { data } = this.state;

    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody
            style={{
              background: "linear-gradient(45deg, #02aab0 , #00cdac)",
              color: "#fff",
              fontWeight: "lighter",
              boxShadow: "-1px 1px 19px black",
            }}
          >
            <div className="">
              <h3 className="bold-text">Broadcast Monitoring</h3>
            </div>
            <h3
              className="bold-text"
              style={{ opacity: "0.3", justifyContent: "center" }}
            >
              No Music Upload yet
            </h3>
            <Line data={data} options={options} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default BroadcastMonitoring;
