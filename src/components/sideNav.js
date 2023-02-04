import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink as SwagLink } from "react-router-dom";

const Container = styled.div`
    background-image: url('/images/nva.jpg');
    width: 4em;
    height: 4em;
    border: 5px solid black;
    font-family: 'Syne Mono', monospace;
    font-size: 32px;
    margin: 16px;
`;

const InnerContainer = styled.div`
    padding: 16px;
`;

const Title = styled.h1`
    margin: unset;
    color: white;
    text-shadow: 2px 2px black;
`;

const Hamburger = styled.p`
    -webkit-text-stroke: 1px white; /* width and color */
    margin: unset;
    text-align: center;
`;

const NavContainer = styled.div`
    width: 80%;
    margin: auto;
    border: 5px solid black;
    background-image: url('/images/nva.jpg');
    padding: 16px;
    color: white;
    font-size: 24px;
    -webkit-text-stroke: 2px black; /* width and color */
    z-index: 1000;
    position: absolute;
    margin-left: 16px;
`;

const Nav = styled(SwagLink)`
    margin: unset;
    padding: unset;
    display: block; 
    font-size: 1.5em; 
    font-weight: bold;
    text-decoration: none;
    color: white;
    -webkit-text-stroke: 2px black; /* width and color */

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const CloseButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  border: unset;
  border: 2px solid black;
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px
`;

const SideNav = () => {
    const [navOpen, setNavOpen] = useState(false);

    const onButtonClick = () => {
        setNavOpen(!navOpen);
    }


    return (
        <>
            <Container>
                <InnerContainer>
                    <Title>Quietknot</Title>
                    <Hamburger onClick={onButtonClick}>menu</Hamburger>

                </InnerContainer>
            </Container>

            {navOpen && (
                <NavContainer>
                    <CloseButton onClick={onButtonClick}>&times;</CloseButton>
                    <Nav to='/' end>home</Nav>
                    <Nav to='/music'>music</Nav>
                    <Nav to='/links'>links</Nav>
                    <Nav to='/merch'>merch</Nav>
                    <Nav to='/about'>about</Nav>
                    <Nav to='/unreleased'>unreleased</Nav>
                </NavContainer>
            )}
        </>
    )
}

export default SideNav;