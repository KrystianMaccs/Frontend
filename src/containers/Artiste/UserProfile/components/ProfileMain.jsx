import React, { PureComponent } from "react";
import { Card, CardBody, Col, Button, Table } from "reactstrap";
import { upload } from "../../../../redux/actions/authActions";
import { connect } from "react-redux";
import UserAvatar from "react-user-avatar";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

class ProfileMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      // pic: this.props.user.dp.image,
    };
  }

  submit = () => {
    const { user } = this.props;
    this.props.upload(this.state.selectedFile, user.dp.id);
    
  };
  handleInputChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  render() {
    const { user, isLoading } = this.props;

    return (
      <Col md={12} lg={5} xl={5}>
        <LoadingOverlay
          active={isLoading}
          spinner={<PlainLogo />}
          text="Please Wait..."
        >
          <Card>
            <CardBody
              className="profile__card"
              style={{
                background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
                color: "#fff",
                fontWeight: "lighter",
                boxShadow: "-1px 1px 19px black",
              }}
            >
              <div className="profile__information">
                <UserAvatar
                  name={`${user.first_name.toUpperCase()} ${user.last_name.toUpperCase()}`}
                  src={user.dp.image}
                  size="150"
                />
                <div className="profile__avatar">
                  {/*  <img
                  src="https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/1.d8e1571d.jpg"
                  alt="avatar"
                /> */}
                </div>
                <div className="profile__data">
                  <p className="profile__name">{`${user.first_name} ${user.last_name}`}</p>
                  <p className="profile__work">{`${user.music_class}`}</p>
                  <p className="profile__contact">{`${user.email}`}</p>
                  <p className="profile__contact" dir="ltr">
                    {`${user.phone}`}
                  </p>
                  <div class="upload-btn-wrapper">
                    <Button
                      color="primary"
                      className="icon profile__btn" /*  */
                    >
                      <p>Change Picture</p>
                    </Button>
                    <input
                      type="file"
                      name="image"
                      onChange={this.handleInputChange}
                    />
                    {
                      <Button
                        color="primary"
                        className="icon profile__btn"
                        onClick={this.submit}
                        disabled={
                          this.state.selectedFile === null ? true : false
                        }
                      >
                        <p>Upload</p>
                      </Button>
                    }
                  </div>
                </div>
              </div>
              <div>
                <Table responsive className="table--bordered">
                  <tbody>
                    <tr>
                      <td>Stage name</td>
                      <td>{user.stage_name}</td>
                    </tr>
                    <tr>
                      <td>Music Class</td>
                      <td>{user.music_class}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>{user.sor}</td>
                    </tr>
                    <tr>
                      <td>LGA</td>
                      <td>{user.lga}</td>
                    </tr>
                    <tr>
                      <td>Account Number</td>
                      <td>{user.bank_account.account_number}</td>
                    </tr>
                    <tr>
                      <td>Bank Name</td>
                      <td>{user.bank_account.bank_name}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </LoadingOverlay>
      </Col>
    );
  }
}

export default connect(
  (state) => ({
    user: state.auth.user,
    image: state.auth.image,
  }),
  { upload }
)(ProfileMain);
