import React, { PureComponent } from "react";
import DownIcon from "mdi-react/ChevronDownIcon";
import { Collapse } from "reactstrap";
import TopbarMenuLink from "./TopbarMenuLink";

import { connect } from "react-redux";
//import { logout } from '../../../redux/actions/authActions';
import icon from "../../../shared/img/1.jpg";

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

class TopbarProfile extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ collapse: !prevState.collapse }));
  };

  render() {
    const { collapse } = this.state;
    const { user, logout, changeToDark, changeToLight } = this.props;

    return (
      <div className="topbar__profile">
        <button type="button" className="topbar__avatar" onClick={this.toggle}>
          <img src={icon} className="topbar__avatar-img" alt="avatar" />
          <p className="topbar__avatar-name">Stiles M.A</p>
          <DownIcon className="topbar__icon" />
        </button>
        {collapse && (
          <button
            type="button"
            className="topbar__back"
            onClick={this.toggle}
          />
        )}
        <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink title="Profile" icon="user" path="/user/profile" />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink
              title="Light Theme"
              icon="layers"
              path="#"
              click={changeToLight}
            />
            <TopbarMenuLink
              title="Dark Theme"
              icon="layers"
              path="#"
              click={changeToDark}
            />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink
              title="Log Out"
              icon="exit"
              path="/login"
              click={logout}
            />
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps /* { logout } */)(TopbarProfile);
