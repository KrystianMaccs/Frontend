import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const BenefitRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.beneficiary.isAuthenticated,
});
export default connect(mapStateToProps)(BenefitRoute);
