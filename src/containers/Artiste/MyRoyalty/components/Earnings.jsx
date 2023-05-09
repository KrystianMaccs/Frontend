import React, { PureComponent } from "react";
import { Card, CardTitle, CardBody, Col } from "reactstrap";
import PropTypes from "prop-types";

import * as Icon from "react-feather";

//Chsrtis JS
import ChartistGraph from "react-chartist";
import Chartist from "chartist";
//Chsrtis CSS
import "chartist/dist/chartist.min.css";

const  EarningStatisticData= {
   labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
   series: [[50, 45, 60, 55, 70, 55, 60, 55, 65, 57, 60, 53, 53]]
}

class Earnings extends PureComponent {
   constructor(props){
      super(props) 
      this.state ={
         data: EarningStatisticData
      }
   }
  render() {
     const  {data} = this.state
     const {word} = this.props
    return (
      <Col md={12} xl={4} lg={6} sm={12} xs={12}>
        <Card>
          <CardBody
            style={{
              background: "linear-gradient(45deg, #2b5876, #4e4376)", 
              color: "#fff",
              fontWeight: "lighter",
              boxShadow: "-1px 1px 19px black",
            }}
          >
            <CardTitle className="mb-0">{word}</CardTitle>
            <span className="grey" style ={{fontSize:"13px"}}>Mon 12 - Sun 18</span>
            <div className="earning-details my-4">
              <h2 className="font-large-2 mb-2">
                N2,134,345
                <Icon.ArrowUp
                  size={56}
                  strokeWidth="1.4"
                  className="teal accent-3"
                />
              </h2>
              <span className="font-medium-1 grey d-block" style ={{fontSize:"15px"}}>
               Total Earnings
              </span>
            </div>

            <ChartistGraph
              className="height-100 WidgetlineChart2 WidgetlineChart2Shadow"
              data = {data}
              type="Line"
              options={{
                axisX: {
                  showGrid: true,
                  showLabel: false,
                  offset: 0,
                },
                axisY: {
                  showGrid: false,
                  low: 40,
                  showLabel: false,
                  offset: 0,
                },
                lineSmooth: Chartist.Interpolation.cardinal({
                  tension: 0,
                }),
                fullWidth: true,
              }}
              listener={{
                created: (data) => {
                  let defs = data.svg.elem("defs");
                  defs
                    .elem("linearGradient", {
                      id: "widgradient1",
                      x1: 0,
                      y1: 1,
                      x2: 0,
                      y2: 0,
                    })
                    .elem("stop", {
                      offset: 0,
                      "stop-color": "rgba(0, 201, 255,1)",
                    })
                    .parent()
                    .elem("stop", {
                      offset: 1,
                      "stop-color": "rgba(17,228,183, 1)",
                    });
                },
              }}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

Earnings.propTypes = {
  cardTitle: PropTypes.string,
  cardSubTitle: PropTypes.string,
  earningAmount: PropTypes.string,
  earningText: PropTypes.string,
  earningStatisticData: PropTypes.object,
};

export default Earnings;
