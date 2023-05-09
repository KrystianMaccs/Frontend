import { connect } from "react-redux";
import Albums from "./components/Album";
import React, { useState } from "react";
import PayoutDay from "./components/PayoutDay";
import { Col, Row, Container } from "reactstrap";
import AdSlot from "./components/AdSlot";
import TotalMusic from "./components/TotalMusic";
import DSPMonitoring from "./components/DSPMonitoring";
import BroadcastMonitoring from "./components/BroadcastMonitoring";
import { songSales } from "../../../redux/actions/songActions";
import MRTMonitoring from "./components/MRTMonitoring";

const Artiste = ({
  subscription,
  songNo,
  song,
  songSales,
  sales,
  isLoading,
  publish,
}) => {
  const [select, setSelect] = useState({});
  const [sale, setSale] = useState([]);
  const [current, setCurrent] = useState("");

  const handleSelect = (selectedOption) => {
    setSelect(selectedOption);
    setCurrent(selectedOption.label);
  };

  const getSongSales = () => {
    if (select.value) {
      songSales(select.value.id);
    }
  };

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">Dashboard</h3>
        </Col>
      </Row>
      <Row>
        <PayoutDay />
        <TotalMusic songNo={songNo} />
        <Albums albumNo={subscription.count} />
      </Row>
      <Row>
        <AdSlot publish={publish} />
      </Row>
      <Row>
        <DSPMonitoring
          song={song}
          handleSelect={handleSelect}
          select={select}
          sale={sale}
          isLoading={isLoading}
          current={current}
          songSales={getSongSales}
          sales={sales}
          setSale={setSale}
        />
      </Row>
      <Row></Row>
      {
        <Row>
          <BroadcastMonitoring />
          <MRTMonitoring />
        </Row>
      }
    </Container>
  );
};

const mapStatetoProps = (state) => ({
  auth: state.auth,
  albumNo: state.songs.albumNo,
  songNo: state.songs.songNo,
  subscription: state.songs.mySubscription,
  label: state.songs.label,
  song: state.songs.song,
  sales: state.songs.song_sales,
  publish: state.advert.publish,
  isLoading: state.songs.isLoading,
});

export default connect(mapStatetoProps, { songSales })(Artiste);
