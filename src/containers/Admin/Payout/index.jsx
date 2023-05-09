import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import ChargeList from "./components/ChargeList";
import { connect } from "react-redux";
import PayoutHistory from "./components/Payouthistory";
import FailedPayout from "./components/FailedPayout";
import ManualPayout from "./components/ManualPayout"
import {
  loadCharges,
  payoutList,
  trigger,
  cashOut,
  payoutHistory,
  payoutFailed, manualPayout
} from "../../../redux/actions/payoutActions";

import Search from "./components/Search";

const Payout = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [next, setNext] = useState(0);
  const [nex, setNex] = useState(0);
  const [failed, setFailed] = useState(null);
  const [manual, setManual] = useState(null);
  const handleChange = (date) => {
    setStartDate(date);
  };
  const handleHistory = (date) => {
    setYear(date);
  };
  const handleManual = (selected) => {
    setManual(selected);
    setNex(1);
  };
  const handleFailed = (selected) => {
    setFailed(selected);
    setNext(1);
  };
  const getPayout = (e) => {
    //  e.preventDefault();
    const month = startDate.getUTCMonth() + 1;
    const year = startDate.getUTCFullYear();
    props.payoutList(month, year);
  };
  const triggerPlug = (e) => {
    //  e.preventdefault();
    const id = props.list.id;
    props.trigger(id);
  };
  const disemburse = () => {
    const id = props.list.id;
    props.cashOut(id);
  };
  const getFailed = () => {
    const month = startDate.getUTCMonth() + 1
    const year = startDate.getUTCFullYear();
    props.payoutFailed(failed.value, month, year);
  };
  const getHistory = () => {
    const x = year.getUTCFullYear();
    props.payoutHistory(x);
  };

  const manualSwitch = () => {
    const month = startDate.getUTCMonth() + 1;
    const year = startDate.getUTCFullYear();
    const body = { month, year }
    props.manualPayout(manual, body)
  }


  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">Payout</h3>
        </Col>
      </Row>
      <Row>
        <Search
          getPayout={getPayout}
          handleChange={handleChange}
          startDate={startDate}
          list={props.list}
          triggerPlug={triggerPlug}
          disemburse={disemburse}
          isLoading={props.isLoading}
        />
      </Row>
      <Row>
        <ChargeList charges={props.charges} />
      </Row>
      <Row>
        <PayoutHistory
          getHistory={getHistory}
          handleHistory={handleHistory}
          year={year}
          history={props.history}
          isLoading={props.isLoading}
        />
      </Row>
      <Row>
        <FailedPayout
          next={next}
          getFailed={getFailed}
          startDate={startDate}
          handleFailed={handleFailed}
          failed={failed}
          failedList={props.failedList}
          handleChange={handleChange}
          isLoading={props.isLoading}
        />
      </Row>
      <Row>
        <ManualPayout
          nex={nex}
          isLoading={props.isLoading}
          manual={manual}
          handleManual={handleManual}
          startDate={startDate}
          manualSwitch={manualSwitch}
          handleChange={handleChange}
        />
      </Row>
    </Container>
  );
};

Payout.propTypes = {};

export default connect(
  (state) => ({
    charges: state.payout.charges ? state.payout.charges.results : null,
    isLoading: state.payout.isLoading,
    list: state.payout.list,
    history: state.payout.history,
    failedList: state.payout.failedList,
  }),
  { loadCharges, payoutList, trigger, cashOut, payoutHistory, payoutFailed, manualPayout }
)(Payout);
