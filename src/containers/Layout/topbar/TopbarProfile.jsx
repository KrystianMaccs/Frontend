import React, { PureComponent } from "react";
import DownIcon from "mdi-react/ChevronDownIcon";
import { Collapse } from "reactstrap";
import TopbarMenuLink from "./TopbarMenuLink";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/authActions";
import UserAvatar from "react-user-avatar";

class TopbarProfile extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
      status: null,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ collapse: !prevState.collapse }));
  };

  render() {
    const { collapse } = this.state;
    const { user, logout, changeToDark, changeToLight } = this.props;
    const first =
      user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1);
    const second =
      user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1);
    return (
      <div className="topbar__profile">
        <button type="button" className="topbar__avatar" onClick={this.toggle}>
          <UserAvatar
            name={`${user.first_name.toUpperCase()} ${user.last_name.toUpperCase()}`}
            src={user.is_staff ? "" : user.dp.image}
            size="80"
          />
          <p className="topbar__avatar-name">{`${first} ${second}`} </p>
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
            {localStorage.getItem("GoCurrentUser") === "true" ? (
              <TopbarMenuLink
                title="Profile"
                icon="user"
                path="/app/artiste/profile"
              />
            ) : (
              false
            )}

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
  uploadStatus: state.auth,
  image: state.auth.image,
});

export default connect(mapStateToProps, { logout })(TopbarProfile);
