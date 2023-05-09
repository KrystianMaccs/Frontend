import React, { PureComponent } from "react";
import {
  Card,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import VerifyBank from "./VerifyBank";
import { connect } from "react-redux";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
    };
  }
  submit = (values) => {
    this.props.updateBenefit(values, this.props.id);
  };

  verify = (values) => {
  };

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    const { activeTab } = this.state;
    const { beneficiary } = this.props;
    return (
      <Card>
        <div
          className="profile__card tabs tabs--bordered-bottom"
          style={{
            background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
            color: "#fff",
            boxShadow: "-1px 1px 19px black",
            width: "100%",
          }}
        >
          <div className="tabs__wrap">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  My Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Update Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Verify Bank
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Profile beneficiary={beneficiary} />
              </TabPane>
              <TabPane tabId="2">
                <EditProfile onSubmit={this.submit} />
              </TabPane>
              <TabPane tabId="3">
                <VerifyBank onSubmit={this.verify}  />
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Card>
    );
  }
}

export default connect()(Tabs);
