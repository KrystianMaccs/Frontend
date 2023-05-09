import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuIcon from "mdi-react/MenuIcon";
import { connect } from "react-redux";

class TopbarSidebarButton extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const {
      changeMobileSidebarVisibility,
      changeSidebarVisibility,
      className,
    } = this.props;

    return (
      <div>
        <button
          type="button"
          className="topbar__button topbar__button--desktop"
          onClick={changeSidebarVisibility}
        >
          <MenuIcon
            style={{
              color: className === "theme-dark" ? "#02c4f5" : "#0c2ab4",
            }}
          />
          {/*   <img
            src='../../../shared/img/burger.svg'
            alt=''
            className='topbar__button-icon'
          /> */}
        </button>
        <button
          type="button"
          className="topbar__button topbar__button--mobile"
          onClick={changeMobileSidebarVisibility}
        >
          <MenuIcon
            style={{
              color: className === "theme-dark" ? "#02c4f5" : "#0c2ab4",
            }}
          />
          {/*  <img src={icon} alt='' className='topbar__button-icon' /> */}
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  className: state.theme.className,
});
export default connect(mapStateToProps)(TopbarSidebarButton);
