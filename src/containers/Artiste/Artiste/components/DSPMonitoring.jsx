/* eslint-disable no-underscore-dangle,react/no-did-mount-set-state */
import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Button, Row } from "reactstrap";
import Select from "react-select"
import { connect } from "react-redux"
import {
  XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, ResponsiveContainer, Legend
} from 'recharts';
import LoadingOverlay from "react-loading-overlay"
import PlainLogo from "../../../../shared/components/PlainLogo"
import moment from "moment"


const DSPMonitoring = ({ setSale, sales, song, select, handleSelect, songSales, sale, isLoading, current }) => {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    if (Object.keys(song).length !== 0) {
      const s = song.results.map((s, i) => ({
        value: s,
        label: s.title,
      }));
      setSongs(s);
    }

  }, [song]);
  useEffect(() => {

    if (Object.keys(sales).length !== 0) {
      const s = sales.results.map((s, i) => ({
        play_count: s.played_count,
        month: moment(s.pay_due).format("MMMM")
      }))
      setSale(s)
    }
  }, [sales])
  return (
    <Col md={12} lg={12} xl={12}>
      <LoadingOverlay
        active={isLoading}
        spinner={<PlainLogo />}
        text="Please Wait..."
      >


        <Card>
          <CardBody
            style={{
              background: "linear-gradient(45deg, #843cf7, #38b8f2)",
              color: "#fff",
              fontWeight: "lighter",
              boxShadow: "-1px 1px 19px black",
              // overflowX: "scroll"
            }}
          >
            <div className="">
              <h3 className="bold-text">DSP Monitoring</h3>
            </div>
            <Row>
              <div className="form__form-group">
                <span className="form__form-group-label">Select a Song</span>
                <div className="form__form-group-field">
                  <Select
                    onChange={handleSelect}
                    name="nationality"
                    options={songs}
                    clearable={false}
                    className="react-select"
                    placeholder="My Songs"
                    classNamePrefix="react-select"
                    value={select}
                  />
                </div>
              </div>
              <Button color="primary" onClick={songSales}>Load Graph</Button>
            </Row>
            {
              sale.length !== 0 ? <>
                <h3
                  className="bold-text"
                  style={{ opacity: "0.9", alignText: "center" }}
                >
                  Song Name: {current}
                </h3>
                <ResponsiveContainer width="95%" height={400}>


                  <AreaChart width={"100%"} height={250} data={sale}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorClick" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="25%" stopColor="#DA4453" stopOpacity={0.8} />
                        <stop offset="75%" stopColor="#89216B" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend  iconType="cross" />
                    <Area type="monotone" dataKey="play_count" stroke="#8884d8" fillOpacity={1} fill="url(#colorClick)" />

                  </AreaChart>
                </ResponsiveContainer>
              </> : "No Data Available"
            }

          </CardBody>
        </Card>
      </LoadingOverlay>
    </Col>
  )
}
export default connect(state => ({}))(DSPMonitoring)