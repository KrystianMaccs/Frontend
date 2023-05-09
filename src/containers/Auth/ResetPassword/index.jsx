import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import ResetPasswordForm from "../../../shared/components/login/ResetPasswordForm";
import { set_pass } from "../../../redux/actions/authActions";
import Anime from "../../../shared/components/Anime";
const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class Resetpassword extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  state = {
    status: null,
  };

  handleSubmit = (data) => {
    var query = new URLSearchParams(this.props.location.search);
    data.uid = query.get("uidb64");
    data.token = query.get("token");

    if (data.password === data.confirm_password) {
      delete data.confirm_password;
      this.props.set_pass(data);
    }
  };

  render() {
    const { passStatus, isLoading } = this.props.auth;
    if (passStatus === 200) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        {isLoading ? (
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
                    Reset your password
                  </h4>
                </div>
                <ResetPasswordForm
                  onSubmit={this.handleSubmit}
                  form="reset_password_form"
                />
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
export default connect(mapStateToProps, { set_pass })(Resetpassword);
