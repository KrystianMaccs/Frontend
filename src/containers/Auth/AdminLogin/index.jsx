import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import AdminForm from "../../../shared/components/login/AdminForm";
import { connect } from "react-redux";
import { log_in } from "../../../redux/actions/authActions";
import Anime from "../../../shared/components/Anime";

const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class AdminLogin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  onSubmit = (data) => {
    for (var member in data) {
      if (data[member] == null) this.setState({ status: 101 });
    }
    this.props.log_in(data);
  };

  render() {
    const { isLoading, isAuthenticated, user } = this.props.auth;
    const { status } = this.state;
    localStorage.setItem("GoCurrentUser", "false");
    if (isAuthenticated) {
      return <Redirect to="/app/staff/dashboard" />;
    }
    return (
      <>
        {" "}
        {isLoading ? (
          <>
            <Anime loading={isLoading} />
          </>
        ) : (
          <>
            <div className="account account--photo"></div>{" "}
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
                    Login
                  </h4>
                </div>
                <AdminForm onSubmit={this.onSubmit} form="admin_form" />
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
export default connect(mapStateToProps, { log_in })(AdminLogin);
