import React from "react"
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavItem, 
    NavMenu, 
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Uncle Lai's</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="story">Our Story</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="menu">Menu</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/order'>Order</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;