/* eslint-disable no-underscore-dangle,react/no-did-mount-set-state */
import React, { PureComponent } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Bar } from "react-chartjs-2";

const initialState = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data 1",
      backgroundColor: "#fff",
      borderColor: "#fff",
      borderWidth: 1,
      hoverBackgroundColor: "#fff",
      hoverBorderColor: "#fff",
      data: [65, 59, 80, 81, 56, 55, 45],
    },
  ],
};

const options = {
  legend: {
    position: "bottom",
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "#fff",
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: "#fff",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "#fff",
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: "#fff",
        },
      },
    ],
  },
};

class MRTMonitoring extends PureComponent {
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

      const newState = {
        ...initialState,
        data: {
          datasets: [newDataSet],
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
      <Col md={12} lg={12} xl={7}>
        <Card>
          <CardBody
            style={{
              background: "linear-gradient(45deg, #aa076b,   #61045f)",
              color: "#fff",
              fontWeight: "lighter",
              boxShadow: "-1px 1px 19px black",
            }}
          >
            <div className="">
              <h3 className="bold-text">Retail Monitoring</h3>
            </div>
            <Bar data={data} options={options} />
            <h3
              className="bold-text"
              style={{ opacity: "0.3", justifyContent: "center" }}
            >
              No Music Upload yet
            </h3>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default MRTMonitoring;
