import React, { useState } from "react";
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
import { NavLink as NavLinkrouter } from "react-router-dom";

const AppNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">MDBlog</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
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
								<NavLinkrouter to="/signup">Sign Up</NavLinkrouter>
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
									<NavLinkrouter to="/">Logout</NavLinkrouter>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default AppNavbar;
