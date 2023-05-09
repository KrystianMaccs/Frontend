/*eslint-disable*/
import React from "react";
import { connect } from "react-redux";
import { artiste } from "../../contents";
import TopbarNavLink from "./TopbarNavLink";
import DownIcon from "mdi-react/ChevronDownIcon";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const TopbarNav = ({ currentUser }) => {
  const content = currentUser === "true" ? artiste() : null;

  return (
    <nav className="topbar__nav">
      {content.map((c, i) => {
        //eslint-disable-next-line
        if (c.hasPerm) {
          if (c.sub) {
            return (
              <UncontrolledDropdown className="topbar__nav-dropdown">
                <DropdownToggle className="topbar__nav-dropdown-toggle">
                  {c.name}
                  <DownIcon />
                </DropdownToggle>
                <DropdownMenu className="topbar__nav-dropdown-menu dropdown__menu">
                  {c.sub.map((s, sc) => {
                    if (s.hasPerm) {
                      return (
                        <DropdownItem>
                          <TopbarNavLink
                            title={s.name}
                            icon="home"
                            route={s.path}
                            key={sc}
                          />
                        </DropdownItem>
                      );
                    }
                    return null;
                  })}{" "}
                </DropdownMenu>
              </UncontrolledDropdown>
            );
          }
          return (
            <Link className="topbar__nav-link" to={c.path}>
              {c.name}
            </Link>
          );
        }
      })}
    </nav>
  );
};
export default connect((state) => ({
  currentUser: state.auth.currentUser,
}))(TopbarNav);
