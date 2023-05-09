import React, { PureComponent } from "react";
import { Row, Container } from "reactstrap";
import PackageList from "./components/PackageList";
import { connect } from "react-redux";

class Storage extends PureComponent {
  constructor() {
    super();
    this.state = {
      assignModal: false,
    };
  }
  render() {
    const { subscription } = this.props;
    return (
      <Container className="dashboard">
        <Row>
          <PackageList subscription={subscription.results} />
        </Row>
        {/*  <Row>
          {" "}
          <UsedStorage />
          <MusicUploaded/>
          <AlbumUploaded/>
        </Row>
        <Row>
          <ArtistStorageUsageList
            modal={assignModal}
            toggle={this.assignToggle}
          />
        </Row> */}
      </Container>
    );
  }
}

Storage.propTypes = {};

export default connect((state) => ({
  subscription: state.songs.subscription,
}))(Storage);
