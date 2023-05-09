import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setActive } from "../../../redux/actions/sidebarActions";

const SidebarLink = ({
  title,
  icon,
  newLink,
  route,
  onClick,
  active,
  setActive,
  key,
}) => (
  <NavLink
    to={route}
    onClick={() => {
      onClick();
      setActive(key);
    }}
    activeClassName={active === key ? "sidebar__link-active" : null}
  >
    <li className="sidebar__link">
      {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ""}
      <p className="sidebar__link-title">
        {title}
        {newLink ? (
          <Badge className="sidebar__link-badge">
            <span>New</span>
          </Badge>
        ) : (
          ""
        )}
      </p>
    </li>
  </NavLink>
);

SidebarLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  newLink: PropTypes.bool,
  route: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarLink.defaultProps = {
  icon: "",
  newLink: false,
  route: "/",
  onClick: () => {},
};

export default connect(
  (state) => ({
    active: state.sidebar.active,
  }),
  { setActive }
)(SidebarLink);
