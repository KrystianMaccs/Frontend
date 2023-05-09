import React, { PureComponent } from "react";
import PropTypes from "prop-types";
const icon =
  "https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/go_create.644323ac.svg";

class ErrorPage extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };
  state = {
    status: null,
    popoverOpen: false,
  };

  render() {
    return (
      <>
        <div className="account account--photo"> </div>
        <div className="account__wrapper">
        
          <div className="account__card">
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
            <h1>404 ERROR!</h1>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({});
export default ErrorPage;
