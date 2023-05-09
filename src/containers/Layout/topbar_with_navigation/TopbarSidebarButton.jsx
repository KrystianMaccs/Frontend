import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuIcon from "mdi-react/MenuIcon";

class TopbarSidebarButton extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const { changeMobileSidebarVisibility, className } = this.props;

    return (
      <div>
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
        </button>
      </div>
    );
  }
}

export default TopbarSidebarButton;
