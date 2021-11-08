import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {AppBar, Typography} from "@mui/material";

const Nav = () => {
    const navLinks = ['Home', 'Popular', 'Battle'];

    return (
        <AppBar position="static" >
            {navLinks.map((navLink, index) => (
                    <Typography  key={index}>
                        <NavLink exact to={navLink === 'Home' ? '/' : navLink.toLowerCase()}>{navLink}</NavLink>
                    </Typography>
                )
            )}
        </AppBar>
    )
}

const Btn = styled(NavLink)`
    display: flex;
    flex-direction: row;
`

export default Nav;
