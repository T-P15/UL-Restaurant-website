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

    import Auth from '../../utils/auth'

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Uncle Lai's</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="story">Our Story</NavLinks>
                    </NavItem>
                    {Auth.loggedIn() ? (
                        <>
                        <NavItem>
                            <NavLinks to="/order">logged in proceed to order</NavLinks>
                        </NavItem>
                            <NavBtn>
                                <NavBtnLink onClick={Auth.logout}>Logout</NavBtnLink>
                            </NavBtn>
                            </>
                    ) : (
                    <>
                        <NavItem>
                        <NavLinks to="/Login">Login</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/signup">Sign Up</NavLinks>
                    </NavItem>
                    </>
                    )}

                </NavMenu>
                

            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;