import React, { Component } from 'react';
import styled from 'styled-components';
import SideNav from '../components/sideNav';
import ScreenContainer from '../components/screenContainer';

const AboutContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Image = styled.img`
    width: 100%;
    max-width: 600px;
`;

const Screen = styled(ScreenContainer)`
    margin-bottom: 8px;
`;

const Main = styled.div`
    padding-bottom: 8px;
`;

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    height: 8px;
`;

const About = () => {
    return (
        <Main>
            <SideNav/>
            <Screen title={'About'} width={'90vw'} x={'5%'} y={'0'}>
                <AboutContainer>
                Ahoy there. I am Ian. I upload music under the pseudonym quietknot.
                All of my music is written and recorded by myself in my bedroom! 
                <Image src="/images/img001.jpg"></Image>
                You can reach me at quietknotmusic@gmail.com or instagram @quietknot_
                </AboutContainer>
            </Screen>
            <Footer />
        </Main>
    );
};

export default About;