import React from "react";
import { Container, Row, Col } from "reactstrap";
import SubscriptionList from "./components/SubscriptionList";
import TheSubscription from "./components/MySubscription";
import AddMusicSubscription from "./components/AddMusicSubscription";
import { addSongToSubsriptions } from "../../../redux/actions/songActions";
import { connect } from "react-redux";

const MySubscription = ({
  subscription,
  songNo,
  user,
  mySubscription,
  song,
  addSongToSubsriptions,
  isLoading,
}) => {
  
  const AddSong = (values) => {
    addSongToSubsriptions(user.id, values.plan.value, values.song.value);
  };
  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">Distribution</h3>
        </Col>
      </Row>
      <Row>
        <SubscriptionList subscription={subscription.results} user={user} />
      </Row>
      <h3 className="bold-text" style={{ justifyContent: "center" }}>
        {songNo < 1 ? (
          "No Music Upload yet"
        ) : (
          <Row>
            <AddMusicSubscription
              mySubscription={mySubscription.results}
              song={song.results}
              addSong={AddSong}
              isLoading={isLoading}
            />
            <TheSubscription mySubscription={mySubscription.results} />
          </Row>
        )}
      </h3>
    </Container>
  );
};

MySubscription.propTypes = {};

export default connect(
  (state) => ({
    subscription: state.songs.subscription,
    songNo: state.songs.songNo,
    song: state.songs.song,
    user: state.auth.user,
    mySubscription: state.songs.mySubscription,
    isLoading: state.songs.isLoading,
  }),
  { addSongToSubsriptions }
)(MySubscription);
