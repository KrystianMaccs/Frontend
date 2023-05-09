import React, { PureComponent } from "react";
import LogInForm from "./LogInForm";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { log_in } from "../../../redux/actions/authActions";
import Anime from "../../../shared/components/Anime";
const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class LoginCard extends PureComponent {
  state = {
    status: null,
  };
  onSubmit = (data) => {
    for (var member in data) {
      if (data[member] == null) this.setState({ status: 101 });
    }

    this.props.log_in(data);
  };

  render() {
    const { isAuthenticated, user, isLoading } = this.props.auth;;

    localStorage.setItem("GoCurrentUser", "true");
    const { status } = this.state;
    if (isAuthenticated) {
      if (!user.phone_verified) return <Redirect to="/otp" />;
    }
    if (isAuthenticated) {
      if (user.phone_verified) {
        if (
          !user.dob ||
          !user.stage_name ||
          !user.sor ||
          !user.lga ||
          !user.music_class
        ) {
          return <Redirect to="/profile_update" />;
        }
      }
    }
    if (isAuthenticated) {
      if (user.phone_verified) {
        if (
          user.dob &&
          user.stage_name &&
          user.sor &&
          user.lga &&
          user.music_class
        ) {
          return <Redirect to="/app/artiste/dashboard" />;
        }
      }
    }

    return (
      <>
        {isLoading && status !== 101 ? (
          <Anime loading={isLoading} />
        ) : (
          <>
            <div className="account account--photo"></div>

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
                    Get Started
                  </h4>
                </div>
                <LogInForm onSubmit={this.onSubmit} form="log_in_form" />
                <div className="account__have-account">
                  <Link to="/forgot_password" style={{ color: "#1b5671" }}>
                    Forgot my password?
                  </Link>
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
  form: state.form,
  extra: state.beneficiary.extra,
  title: state.beneficiary.title,
});
export default connect(mapStateToProps, { log_in })(LoginCard);
