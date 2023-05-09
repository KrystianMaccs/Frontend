import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TopbarSidebarButton from "./TopbarSidebarButton";
import TopbarProfile from "../topbar/TopbarProfile";
import TopbarNotification from "./TopbarNotification";
import TopbarNav from "./tobar_nav/TopbarNav";
import TopbarSearch from "./TopbarSearch";

export default class TopbarWithNavigation extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const {
      changeMobileSidebarVisibility,
      changeToDark,
      changeToLight,
    } = this.props;

    return (
      <div className="topbar topbar--navigation">
        <div className="topbar__wrapper">
          <div className="topbar__left">
            <TopbarSidebarButton
              changeMobileSidebarVisibility={changeMobileSidebarVisibility}
            />
            <Link className="topbar__text-logo" to="#">
              <span className="topbar__logo" />
              {/*   GO <span className="account__logo-accent">CREATE</span> */}
            </Link>
          </div>
          <TopbarNav />
          <div className="topbar__right">
            <TopbarSearch />
            <TopbarNotification />
            <TopbarProfile
              changeToDark={changeToDark}
              changeToLight={changeToLight}
            />
          </div>
        </div>
      </div>
    );
  }
}
