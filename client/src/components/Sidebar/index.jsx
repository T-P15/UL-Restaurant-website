import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarRoute,
    SidebarMenu,
    SideBtnWrap
 } from './SidebarElements'
 
 import Auth from '../../utils/auth'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Our Story</SidebarLink>
                    {Auth.loggedIn() ? (
                        <SidebarLink  onClick={Auth.logout}>Logout</SidebarLink>
                    ) : (
                        <>
                        <SidebarLink to="/login" onClick={toggle}>login</SidebarLink>
                        <SidebarLink to="/signup" onClick={toggle}>Signup</SidebarLink>
                        </>
                    )}
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to="/Order">Order</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;