import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavbarText, NavItem } from "reactstrap";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../store/slice/auth";

const Header = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          Welcome,
          {user}
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/character">
              Character
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/episode" className="nav-link">
              Episode
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText onClick={() => dispatch(logout())}>
          <span
            style={{
              textTransform: "uppercase",
              cursor: "pointer",
              fontWeight: "bolder",
            }}
          >
            logout
          </span>
        </NavbarText>
      </Navbar>
    </div>
  );
};
Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(({ auth }) => auth)(Header);
