import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { NavLink as NavLinkrouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class AppNavbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    isOpen: false,
  };

  render() {
    const { user } = this.props.auth;

    const toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    };

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>MDBlog</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <NavLinkrouter to="/dashboard">Dashboard</NavLinkrouter>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <NavLinkrouter to="/favourites">Favourites</NavLinkrouter>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <NavLinkrouter to="/post">Post a blog!</NavLinkrouter>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <NavLinkrouter to="/Register">Sign Up</NavLinkrouter>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLinkrouter to="/profile">Profile</NavLinkrouter>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLinkrouter to="/mynotes">My Notes</NavLinkrouter>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLinkrouter to="/about">About MD</NavLinkrouter>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <button>
                      <Link onClick={this.onLogoutClick} to="/landing">
                        Logout
                      </Link>
                    </button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(AppNavbar);
