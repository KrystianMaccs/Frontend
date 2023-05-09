import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";

import {
  changeThemeToDark,
  changeThemeToLight,
} from "../../redux/actions/themeActions";
import {
  changeMobileSidebarVisibility,
  changeSidebarVisibility,
} from "../../redux/actions/sidebarActions";
import { SidebarProps } from "../../shared/prop-types/ReducerProps";
import { loadAlbum } from "../../redux/actions/songActions";
import { loadCharges } from "../../redux/actions/payoutActions";
import { loadArtiste, loadpackage } from "../../redux/actions/adminAction";
import { loadPlan, advert } from "../../redux/actions/advertAction";

class Layout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebar: SidebarProps.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    if (localStorage.getItem("GoCurrentUser") === "true") {
      dispatch(loadAlbum())
    } else {
      dispatch(loadCharges());
      dispatch(loadArtiste());
      dispatch(loadpackage());
      dispatch(loadPlan());
      dispatch(advert());
    }
  }

  changeSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeSidebarVisibility());
  };

  changeMobileSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeMobileSidebarVisibility());
  };

  changeToDark = () => {
    const { dispatch } = this.props;
    dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    const { dispatch } = this.props;
    dispatch(changeThemeToLight());
  };

  render() {
    const { sidebar } = this.props;
    const layoutClass = classNames({
      layout: true,
      "layout--collapse": sidebar.collapse,
      "layout--top-navigation": true,
    });

    return (
      <div className={layoutClass}>
        <Sidebar
          sidebar={sidebar}
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
        />

        <Topbar
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          changeSidebarVisibility={this.changeSidebarVisibility}
          changeToDark={this.changeToDark}
          changeToLight={this.changeToLight}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  sidebar: state.sidebar,
  theme: state.theme,
  auth: state.auth,
}))(Layout);
