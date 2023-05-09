import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import RegisterForm from "../../../shared/components/login/RegisterForm";
import csc from "country-state-city";
//import icon from "../../../shared/img/logo/go_create.svg";
import { connect } from "react-redux";
import { register } from "../../../redux/actions/authActions";
import Anime from "../../../shared/components/Anime";
const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class RegisterPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      code: null,
    };
  }
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  onSubmit = (data) => {
    const { code } = this.state;
    for (var member in data) {
      if (data[member] === null) {
        this.setState({ status: 101 });
      }
    }
    if (data.terms && code !== null) {
      const c = csc.getCountryByCode(code.value);

      data.phone = `+${c.phonecode}${data.phone.slice(1)}`;
      if (Object.keys(data).length >= 4) {
        data.country = code.label;
        console.log(data);
        //this.props.register(data);
        localStorage.setItem("countryCode", code.value);
      } else {
        this.setState({ status: 400 });
      }
    } else {
      this.setState({ status: 101 });
    }
  };
  handleChange = (selectedOption) => {
    this.setState({ code: selectedOption });
  };
  render() {
    const { isLoading, regStatus } = this.props.auth;
    if (regStatus === 200) {
      return <Redirect to="/login" />;
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
                    Create an Account
                  </h4>
                </div>
                <RegisterForm
                  onSubmit={this.onSubmit}
                  form="register_form"
                  alert={this.showNotification}
                  code={this.state.code}
                  handleChange={this.handleChange}
                />
                <div className="account__have-account">
                  <p style={{ fontSize: "15px" }}>
                    Already have an account?{" "}
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
export default connect(mapStateToProps, { register })(RegisterPage);
