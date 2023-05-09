import React, { Component } from "react";
import PropTypes from "prop-types";
import SidebarLink from "./SidebarLink";
import { artiste, staff } from "../../contents";
import SidebarCategory from "./SidebarCategory";

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const currentUser = localStorage.getItem("GoCurrentUser");
    const content = currentUser === "artiste" ? artiste() : staff();
    // const { changeToLight, changeToDark } = this.props;

    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          {content.map((c, i) => {
            if (c.hasPerm) {
              if (c.sub) {
                return (
                  <SidebarCategory title={c.name} icon={c.icon} key={i}>
                    {c.sub.map((s, sc) => {
                      if (s.hasPerm) {
                        return (
                          <SidebarLink
                            key={sc}
                            title={s.name}
                            route={s.path}
                            onCLick={this.hideSidebar}
                          />
                        );
                      }
                      return null;
                    })}
                  </SidebarCategory>
                );
              }
              return (
                <SidebarLink
                  title={c.name}
                  key={i}
                  icon={c.icon}
                  route={c.path}
                  onClick={this.hideSidebar}
                />
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
