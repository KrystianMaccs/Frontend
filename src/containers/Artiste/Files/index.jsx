import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { reset, getFormValues } from "redux-form";
//import PropTypes from "prop-types";
import FileUpload from "./components/FileUpload";
import FeaturedAlbum from "./components/FeaturedAlbum";
import AdSlot from "../Artiste/components/AdSlot";
import SoloSong from "./components/SoloSong";
import MusicTable from "./components/MusicTable";
import RoyalSplitting from "./components/RoyalSplitting";
import Eps from "./components/Eps";
import MusicInfo from "./components/MusicInfo";
import { songUpload, addBeneficiary } from "../../../redux/actions/songActions";
import { connect } from "react-redux";

const Files = (props) => {
  const [music, setMusic] = useState(false);
  const [next, setNext] = useState(false);
  const [share, setShare] = useState(0);
  const [label, setLabel] = useState("");
  let tot = 0;
  const [disabled, setDisabled] = useState(true);
  const [rem, setRem] = useState(0);
  // const [tot, setTot] = useState(100);
  const [select, setSelect] = useState(null);
  const [code, setCode] = useState(null);
  const handleLabel = (value) => {
    setLabel(value);
  };
  const handleChange = (value) => {
    setShare(value);
  };
  const handleCode = (value) => {
    setCode(value);
  };
  const handleSelect = (selectedOption) => {
    setSelect(selectedOption);
    setDisabled(false);
    for (
      let index = 0;
      index < selectedOption.value.royalties.length;
      index++
    ) {
      tot += selectedOption.value.royalties[index].share;
    }
    setRem(100 - tot);
  };
  const addBeneficiary = (values) => {
    if (code) {
      values.phone = `+${code.phoneCode}${values.phone.slice(1)}`;
    }
    values.share = share;
    values.song = select.value.id;
    props.addBeneficiary(values);
    setNext(false);
    setSelect([]);
    setShare(0);
    //  props.dispatch(reset("splitting_form"));
  };

  const onSubmit = (values) => {
    let genre = "";
    let access = "";
    if (values.access_availability.length !== 0) {
      for (let index = 0; index < values.access_availability.length; index++) {
        delete values.access_availability[index].value;
        delete values.access_availability[index].label;
      }
      values.access_availability.forEach((aa) => {
        access += aa.title + ",";
      });
    }
    if (values.genres.length !== 0) {
      for (let index = 0; index < values.genres.length; index++) {
        delete values.genres[index].value;
        delete values.genres[index].label;
      }
      values.genres.forEach((g) => {
        genre += g.title + ",";
      });
    }
    delete values.file[0].preview;
    delete values.cover[0].preview;
    const formdata = new FormData();
    formdata.append("file", values.file[0]);
    formdata.append("cover", values.cover[0]);
    formdata.append("title", values.title);
    formdata.append("genres", genre);
    formdata.append("access_availability", access);
    formdata.append("description", values.description);
    formdata.append("releaseStartDate", values.releaseStartDate);
    formdata.append("releaseEndDate", values.releaseEndDate);
    formdata.append("preSalesDate", values.preSalesDate);
    formdata.append("label", label.value);
    props.songUpload(formdata, props.album.results[0].id);
    setMusic(false);
    //props.dispatch(reset("song_upload"));
  };

  const [selected, setSelected] = useState(null);
  const handleInputChange = (event) => {
    setSelected(event.target.files[0]);
  };

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">Upload Files</h3>
        </Col>
      </Row>
      <Row>
        <MusicTable
          recentUpload={props.recentUpload}
          isLoading={props.isLoading}
          labels={props.labels.results}
          genre={props.genres.results}
          access={props.access.results}
          songs={props.song.results}
        />
      </Row>
      <Row>
        <SoloSong songNo={props.songNo} />

        <FeaturedAlbum user={props.user} />
      </Row>
      <Row>
        <AdSlot publish={props.publish} />
      </Row>
      <Row>
        <FileUpload
          form="song_upload_form"
          onSubmit={onSubmit}
          selected={selected}
          handleInputChange={handleInputChange}
          isLoading={props.isLoading}
          genres={props.genres.results}
          access={props.access.results}
          music={music}
          setMusic={setMusic}
          labe={label}
          handleLabel={handleLabel}
          labels={props.labels.results}
          val={props.val}
          album={props.album}
        />
        <RoyalSplitting
          song={props.song}
          addBeneficiary={addBeneficiary}
          share={share}
          tot={tot}
          handleChange={handleChange}
          myvalues={props.myvalues}
          handleSelect={handleSelect}
          select={select}
          disabled={disabled}
          rem={rem}
          next={next}
          setNext={setNext}
          isLoading={props.isLoading}
          handleCode={handleCode}
          code={code}
        />
      </Row>
      <Row></Row>
    </Container>
  );
};

Files.propTypes = {};
const mapStateToProps = (state) => ({
  album: state.songs.album,
  albumNo: state.songs.albumNo,
  songNo: state.songs.songNo,
  isLoading: state.songs.isLoading,
  song: state.songs.song,
  genres: state.songs.genres,
  access: state.songs.access,
  user: state.auth.user,
  val: getFormValues("song_upload_form")(state),
  labels: state.songs.label,
  publish: state.advert.publish,
});
export default connect(mapStateToProps, { songUpload, addBeneficiary })(Files);
