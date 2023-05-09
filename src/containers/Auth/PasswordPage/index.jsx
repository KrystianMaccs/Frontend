import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import PasswordForm from "../../../shared/components/login/PasswordForm";
//import icon from "../../../shared/img/logo/go_create.svg";
import { connect } from "react-redux";
import { set_pass } from "../../../redux/actions/authActions";
import Anime from "../../../shared/components/Anime";
const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class PasswordPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      show: false,
    };
  }
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  onSubmit = (data) => {
    var query = new URLSearchParams(this.props.location.search);
    data.uid = query.get("uidb64");
    data.token = query.get("token");

    if (data.password === data.confirm_password) {
      delete data.confirm_password;
      this.props.set_pass(data);
    } 
  };

  showToggle = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { passStatus, isLoading } = this.props.auth;
    const { status, show } = this.state;
    if (passStatus === 200) {
      return <Redirect to="/login" />;
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
                    Create your password
                  </h4>
                </div>
                <PasswordForm
                  onSubmit={this.onSubmit}
                  form="password_form"
                  toggle={this.showToggle}
                  modal={show}
                />
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
export default connect(mapStateToProps, { set_pass })(PasswordPage);
