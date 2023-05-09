import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Artiste from "./components/Artiste";
import Admin from "./components/Admin";

const UserProfile = ({ currentUser }) => (
  <div>{currentUser === "artiste" ? <Artiste /> : <Admin />}</div>
);

UserProfile.propTypes = {
  currentUser: PropTypes.string.isRequired,
};

export default connect((state) => ({
  rtl: state.rtl,
  currentUser: state.auth.currentUser,
}))(UserProfile);
