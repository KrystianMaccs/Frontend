import React, { PureComponent } from "react";
import { Row, Container, Col } from "reactstrap";
import ArtistList from "./components/ArtisteList"; 
import {connect} from "react-redux"
import {deleteArtiste, deactivateArtiste} from "../../../redux/actions/adminAction"

class Artiste extends PureComponent {
 

  addToggle = () => {
    this.setState((prevState) => ({ addModal: !prevState.addModal }));
  };
  editToggle = () => {
    this.setState((prevState) => ({ editModal: !prevState.editModal }));
  };
  render() {
    const { artiste, deleteArtiste, deactivateArtiste, isLoading } = this.props;
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Artiste</h3>
          </Col>
        </Row>{" "}
      {/*   <Row>
          <Artistes />
          <ActiveArtiste />
        </Row>
        <Row>
          <AddModal
            form="add_form"
            modal={addModal}
            toggle={this.addToggle}
            onSubmit
          />
        </Row> */}
        <Row>
          <ArtistList
            artiste={artiste.results}
            deleteArtiste={deleteArtiste}
            deactivateArtiste={deactivateArtiste}
            isLoading={isLoading}
          />
        </Row>
      </Container>
    );
  }
}

Artiste.propTypes = {};

export default connect((state) => ({
  artiste: state.admin.artiste,
  isLoading: state.admin.isLoading
}), {deleteArtiste, deactivateArtiste})(Artiste);
