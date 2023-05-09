import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import OtpForm from "../../../shared/components/login/OtpForm";

import { connect } from "react-redux";
import {
  otp_verify,
  resend_otp,
  update_profile,
} from "../../../redux/actions/authActions";
import {
  verifyBenefit,
  authenticateBenefit,
} from "../../../redux/actions/beneficiaryAction";
import Anime from "../../../shared/components/Anime";
const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class PhoneOtp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      show: false,
      code: null,
      send: false,
    };
  }
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };
  componentDidMount() {
    var query = new URLSearchParams(this.props.location.search);
    if (query.get("uidb64") !== null && query.get("token") !== null) {
      this.verifyBenefits();
    }
  }
  verifyBenefits = () => {
    var query = new URLSearchParams(this.props.location.search);
    localStorage.setItem("uid", query.get("uidb64"));
    localStorage.setItem("token", query.get("token"));
    const data = {
      uid: query.get("uidb64") || localStorage.getItem("uidb64"),
      token: query.get("token") || localStorage.getItem("token"),
      otp: "000000",
    };
    this.props.verifyBenefit(data);
  };

  onSubmit = (data) => {
    var query = new URLSearchParams(this.props.location.search);
    const body = {
      uid: query.get("uidb64") || localStorage.getItem("uidb64"),
      token: query.get("token") || localStorage.getItem("token"),
      otp: data.otp,
    };
    const { code, show } = this.state;

    if (!show) {
      if (data.otp !== null && data.otp !== undefined) {
        this.props.authenticateBenefit(body);
      }
    } else {
      if (code !== null) {
        this.props.resend_otp(this.props.phone);
        this.setState((prevState) => ({ show: !prevState.show }));
      }
    }
  };
  onSend = () => {
    this.props.resend_otp(this.props.phone);
    this.setState((prevState) => ({ send: !prevState.send }));
  };
  reSend = () => {
    this.props.resend_otp(this.props.phone);
  };
  render() {
    const {  isComplete, loading } = this.props;
    const { send } = this.state;
    var query = new URLSearchParams(this.props.location.search);
    if (query.get("uidb64") === null ) {
      return <Redirect to="/login" />;
    }
    if (isComplete) {
      return <Redirect to="/benefit_home" />;
    }

    return loading ? (
      <Anime loading={loading} />
    ) : (
      <>
        <div className="account account--photo"></div>
        <div className="account__wrapper">
          <div className="account__card">
            {send ? (
              <>
                {" "}
                <div className="account__head">
                  <img
                    src={icon}
                    alt={"GoCreate"}
                    height="100px"
                    weight="130px"
                  />
                  <h4
                    className="account__title"
                    style={{ textAlign: "center", marginTop: "12px" }}
                  >
                    Verify your Phone Number
                  </h4>
                </div>
                <OtpForm onSubmit={this.onSubmit} form="otp_form" />
                <Button
                  id="PopoverLeft"
                  onClick={this.reSend}
                  outline
                  className="button-tooltip"
                >
                  Resend OTP
                </Button>
                <h2>{`Otp is sent to ${this.props.phone}. Inform the artiste if phone number is not correct`}</h2>
              </>
            ) : (
              <>
                {" "}
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
                    Request for OTP
                  </h4>
                </div>
                <div className="account__btns">
                  <Button
                    className="account__btn"
                    color="#71e015"
                    onClick={this.onSend}
                    type="submit"
                    style={{ backgroundColor: "#9dc828" }}
                  >
                    OTP Request
                  </Button>
                </div>
              </>
            )}
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
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.beneficiary.loading,
  isAuthenticated: state.beneficiary.isAuthenticated,
  isComplete: state.beneficiary.isComplete,
  phone: state.beneficiary.beneficiary.phone,
  engaged: state.beneficiary.engaged,
  token: state.beneficiary.token,
  profile: state.beneficiary.beneficiary
    ? state.beneficiary.beneficiary.profile
    : null,
});
export default connect(mapStateToProps, {
  otp_verify,
  resend_otp,
  update_profile,
  verifyBenefit,
  authenticateBenefit,
})(withRouter(PhoneOtp));
