import React, { PureComponent } from "react";
import {
  Card,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import ProfileSettings from "./ProfileSettings";
import ResetPassword from "./ResetPassword";
import ProfileLocale from "./ProfileLocale";
import BankUpdate from "./BankUpdate";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

export default class ProfileTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab } = this.state;
    const {
      onSubmit,
      resetPassword,
      isLoading,
      sor,
      lga,
      handleState,
      handleLga,
      submit,
      music_class,
      handleClass,
    } = this.props;
    return (
      <Col md={12} lg={12} xl={7}>
        <Card>
          <div
            className="profile__card tabs tabs--bordered-bottom"
            style={{
              background: "linear-gradient(45deg, #cc2b5e, #753a88)",
              color: "#fff",
              boxShadow: "-1px 1px 19px black",
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
                    Update Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Update Locale
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    Reset Password
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      this.toggle("4");
                    }}
                  >
                    Update Bank
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <ProfileSettings
                    onSubmit={onSubmit}
                    form="profile_settings_form"
                    handleClass={handleClass}
                    music_class={music_class}
                    isLoading={isLoading}
                  />
                </TabPane>
                <TabPane tabId="2">
                  <ProfileLocale
                    onSubmit={submit}
                    form="profile_settings_form"
                    sor={sor}
                    lga={lga}
                    handleLga={handleLga}
                    isLoading={isLoading}
                    handleState={handleState}
                  />
                </TabPane>
                <TabPane tabId="3">
                  <ResetPassword
                    onSubmit={resetPassword}
                    isLoading={isLoading}
                    form="password_reset_form"
                  />
                </TabPane>
                <TabPane tabId="4">
                  <BankUpdate />
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}
