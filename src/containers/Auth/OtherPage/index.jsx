import React, { PureComponent } from "react";
import { Col, Card, Row, CardBody } from "reactstrap";
import WizardFormOne from "./components/WizardFormOne";
import WizardFormTwo from "./components/WizardFormTwo";
import { update_profile } from "../../../redux/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Anime from "../../../shared/components/Anime";
const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class OtherPage extends PureComponent {
  constructor() {
    super();
    this.state = {
      page: 1,
      nationality: null,
      c_value: null,
      state: null,
      city: null,
      status: null,
      music_class: null,
      dob: null,
    };
  }

  nextPage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
  finish = (data) => {
    const { music_class, city, state } = this.state;
    let { user } = this.props.auth;
    data.email = user.email;
    data.phone = user.phone;
    for (var value in data) {
      if (data[value] === null) {
        this.setState({ status: 101 });
      }
    }

    data.music_class = music_class.label;
    data.sor = state.label;
    data.lga = city.label;
    this.props.update_profile(data, user.id);
  };
  handleCity = (selectedOption) => {
    this.setState({ city: selectedOption });
  };
  handleState = (selectedOption) => {
    this.setState({ state: selectedOption });
  };
  handleProfession = (selectedOption) => {
    this.setState({ music_class: selectedOption });
  };
  handledob = (date) => {
    // const { onChange } = this.props;
    this.setState({
      dob: date,
    });
    //onChange(date);
  };
  previousPage = () => {
    this.setState((prevState) => ({ page: prevState.page - 1 }));
  };
  /*  handleChange = (selectedOption) => {
    this.setState({ nationality: selectedOption });
  };
 */

  render() {
    const { isLoading, updateStatus } = this.props.auth;
    const { page, status } = this.state;

    if (updateStatus === 200) {
      return <Redirect to="/app/artiste/dashboard" />;
    }

    return (
      <>
        {isLoading && !status ? (
          <Anime loading={isLoading} />
        ) : (
          <>
            <div className="account account--photo"> </div>
            <div className="account__wrapper">
              <div className="account__wizard">
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
                    Fill in your Personal Details
                  </h4>
                </div>
                <Row>
                  <Col md={12} lg={12}>
                    <Card>
                      <CardBody
                        style={{ boxShadow: "none", background: "none" }}
                      >
                        <div className="wizard__steps">
                          <div
                            className={`wizard__step${
                              page === 1 ? " wizard__step--active" : ""
                            }`}
                          >
                            <p>Step 1</p>
                          </div>
                          <div
                            className={`wizard__step${
                              page === 2 ? " wizard__step--active" : ""
                            }`}
                          >
                            <p>Step 2</p>
                          </div>
                        </div>
                        <div className="wizard__form-wrapper">
                          {page === 1 && (
                            <WizardFormOne
                              onSubmit={this.nextPage}
                              handleChange={this.handleProfession}
                              music_class={this.state.music_class}
                            />
                          )}
                          {page === 2 && (
                            <WizardFormTwo
                              previousPage={this.previousPage}
                              onSubmit={this.finish}
                              handleCity={this.handleCity}
                              handleState={this.handleState}
                              handledob={this.handledob}
                              nationality={this.state.nationality}
                              state={this.state.state}
                              city={this.state.city}
                              dob={this.state.dob}
                            />
                          )}
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
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
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
export default connect(mapStateToProps, { update_profile })(OtherPage);
