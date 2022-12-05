import React, { useState } from 'react';
import styled from 'styled-components';

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

const NavLink = styled.h2`
    margin: unset;
    padding: unset;
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
                    <NavLink href='/home'>home</NavLink>
                    <NavLink href='/music'>music</NavLink>
                    <NavLink href='/links'>links</NavLink>
                    <NavLink href='/merch'>merch</NavLink>
                    <NavLink href='/about'>about</NavLink>
                </NavContainer>
            )}
        </>
    )
}

export default SideNav;