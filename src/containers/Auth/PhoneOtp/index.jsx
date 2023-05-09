import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import OtpForm from "../../../shared/components/login/OtpForm";
import PhoneOtpForm from "../../../shared/components/login/PhoneOtpForm";
import { connect } from "react-redux";
import {
  otp_verify,
  resend_otp,
  update_profile,
} from "../../../redux/actions/authActions";
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

  onSubmit = (data) => {
    const { show, code } = this.state;
    const { user } = this.props.auth;

    if (!show) {
      if (data.otp !== null && data.otp !== undefined) {
        data.phone = user.phone;
        this.props.otp_verify(data.otp, data.phone);
      }
    } else {
      if (code !== null) {
        data.phone = `+${code.phoneCode}${data.phone.slice(1)}`;
        data.email = user.email;
        this.props.update_profile(data);
        this.props.resend_otp(user.phone);
        this.setState((prevState) => ({ show: !prevState.show }));
        this.setState({ status: 104 });
      }
    }
  };

  handleChange = (selectedOption) => {
    this.setState({ code: selectedOption });
  };

  showToggle = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };
  onSend = () => {
    const { user } = this.props.auth;
    this.props.resend_otp(user.phone);
    this.setState((prevState) => ({ send: !prevState.send }));
  };
  reSend = () => {
    const { user } = this.props.auth;
    this.props.resend_otp(user.phone);
  };
  render() {
    const { otpStatus, isLoading, user } = this.props.auth;
    const { status, show, send } = this.state;
    if (user.is_staff) {
      return <Redirect to="/log_in" />;
    }
    if (otpStatus === 200) {
      return <Redirect to="/profile_update" />;
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
                {send ? (
                  !show ? (
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
                      <div className="account__have-account">
                        <Button
                          id="PopoverLeft"
                          onClick={this.reSend}
                          outline
                          className="button-tooltip"
                        >
                          Resend OTP
                        </Button>
                        <p style={{ color: "#9dc828" }}>
                          <Button
                            // id="PopoverLeft"
                            onClick={this.showToggle}
                            outline
                            className="button-tooltip"
                          >
                            Change my number
                          </Button>
                        </p>
                      </div>
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
                          Change my Phone Number
                        </h4>
                      </div>
                      <PhoneOtpForm
                        onSubmit={this.onSubmit}
                        form="phnoe_otp_form"
                        code={this.state.code}
                        handleChange={this.handleChange}
                      />
                    </>
                  )
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
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
  otp_verify,
  resend_otp,
  update_profile,
})(PhoneOtp);
