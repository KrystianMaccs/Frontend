import React, { PureComponent } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import EmailForm from "../../../shared/components/login/EmailForm";
import { reset_pass } from "../../../redux/actions/authActions";
//import icon from "../../../shared/img/logo/go_create.svg";
import Anime from "../../../shared/components/Anime";

const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class ForgotPassword extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };
  state = {
    status: null,
  };

  handleSubmit = (data) => {
    if (data.email === null || data.email === undefined) {
      this.setState({ status: 101 });
    } else {
      this.props.reset_pass(data.email);
    }
  };

  render() {
    const { isLoading, resetStatus } = this.props.auth;
    if (resetStatus === 200) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        {isLoading ? (
          <Anime loading={isLoading} />
        ) : (
          <>
            <div className="account account--photo"> </div>
            <div className="account__wrapper">
              <div className="account__card">
                <div className="account__head">
                  <img
                    src={icon}
                    alt="GoCreate"
                    height="100px"
                    weight="130px"
                  />
                  <h4
                    className="account__title"
                    style={{ textAlign: "center", marginTop: "12px" }}
                  >
                    Forgot your Password
                  </h4>
                </div>
                <EmailForm onSubmit={this.handleSubmit} form="email_form" />
                <div className="account__have-account">
                  <p style={{ color: "#9dc828" }}>
                    Remembered my Password...
                    <Link to="/login" style={{ color: "#1b5671" }}>
                      Login
                    </Link>
                  </p>
                </div>
                <div className="account__have-account">
                  <p style={{ fontSize: "15px" }}>
                    Powered by {"          "}
                    <img
                      src="https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/7251e4f.png"
                      alt="mcsn"
                      style={{
                        width: "100px",
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { reset_pass })(ForgotPassword);
