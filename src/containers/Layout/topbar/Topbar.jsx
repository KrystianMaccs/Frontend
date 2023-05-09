import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TopbarSidebarButton from "./TopbarSidebarButton";
import TopbarProfile from "./TopbarProfile";

class Topbar extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const {
      changeMobileSidebarVisibility,
      changeSidebarVisibility,
      changeToDark,
      changeToLight,
    } = this.props;

    return (
      <div className="topbar">
        <div className="topbar__wrapper">
          <div className="topbar__left">
            <TopbarSidebarButton
              changeMobileSidebarVisibility={changeMobileSidebarVisibility}
              changeSidebarVisibility={changeSidebarVisibility}
            />
            <Link className="topbar__text-logo" to="#">
              <h3 className="account__title">
                <span className="topbar__logo">
                  {/*  GO <span className='account__logo-accent'>CREATE</span> */}
                </span>
              </h3>
            </Link>
          </div>
          <div className="topbar__right">
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

export default Topbar;
