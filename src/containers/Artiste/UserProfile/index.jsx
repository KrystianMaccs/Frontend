import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import ProfileMain from "./components/ProfileMain";
import ProfileTabs from "./components/ProfileTabs";
import { connect } from "react-redux";
import {
  update_profile,
  change_password,
} from "../../../redux/actions/authActions";
import LabelList from "../MyRoyalty/components/LabelList";

const Artiste = (props) => {
  const [sor, setSor] = useState(null);
  const [lga, setLga] = useState(null);
  const [music_class, setMusiclass] = useState(null);

  const handleState = (e) => {
    setSor(e);
  };

  const handleLga = (value) => {
    setLga(value);
  };
  const onSubmit = (data) => {
    const { id } = props.user;
    data["music_class"] = music_class.value || "";
    // data.append("music_class", music_class.value);

    props.update_profile(data, id);
  };

  const handleClass = (e) => {
    setMusiclass(e);
  };
  const submit = (data) => {
    const { id } = props.user;
    data["lga"] = lga.label;
    data["sor"] = sor.label;

    props.update_profile(data, id);
  };
  const resetPassword = (data) => {
    props.change_password(data);
  };

  return (
    <Container>
      <div className="dashboard">
        <Row>
          <ProfileMain isLoading={props.isLoading} />
          <ProfileTabs
            onSubmit={onSubmit}
            resetPassword={resetPassword}
            isLoading={props.isLoading}
            handleLga={handleLga}
            setSor={setSor}
            handleState={handleState}
            sor={sor}
            lga={lga}
            submit={submit}
            handleClass={handleClass}
            music_class={music_class}
          />
        </Row>
        <Row>
          <LabelList
            isLoading={props.isloading}
            song={props.song}
            labels={props.labels}
          />
        </Row>
      </div>
    </Container>
  );
};

export default connect(
  (state) => ({
    user: state.auth.user,
    isLoading: state.auth.isLoading,
    isloading: state.songs.isLoading,
    song: state.songs.song,
    labels: state.songs.label,
  }),
  { update_profile, change_password }
)(Artiste);
