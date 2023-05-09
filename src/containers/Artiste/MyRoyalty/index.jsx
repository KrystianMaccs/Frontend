import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import RoyaltyList from "./components/RoyaltyList";
import AdSlot from "../Artiste/components/AdSlot"
import { connect } from "react-redux";

const MyRoyalty = (props) => {

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">Royalty</h3>
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <RoyaltyList isLoading={props.isLoading} song={props.song} />
        </Col>
        <Col xl={12}>
          <AdSlot publish={props.publish} />
        </Col>
      </Row>
    </Container>
  );
};

MyRoyalty.propTypes = {};

export default connect((state) => ({
  labels: state.songs.label,
  user: state.auth.user,
  isLoading: state.songs.isLoading,
  song: state.songs.song,
  publish: state.advert.publish
}))(MyRoyalty);
