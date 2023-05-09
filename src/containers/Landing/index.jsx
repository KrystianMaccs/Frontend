import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Landing = ({ currentUser }) => (
  <Container className="Landing"></Container>
);

Landing.propTypes = {
  currentUser: PropTypes.string.isRequired,
};

export default connect((state) => ({
  rtl: state.rtl,
  currentUser: state.auth.currentUser,
}))(Landing);
