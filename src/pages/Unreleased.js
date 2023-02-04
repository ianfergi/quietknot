import React from 'react';
import styled from 'styled-components';
import SideNav from '../components/sideNav';
import ScreenContainer from '../components/screenContainer';
import { detectMob } from '../utils';
import Mp3Player from '../components/reusable/mp3Player';

const AboutContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Screen = styled(ScreenContainer)`
    margin-bottom: 8px;
`;

const Main = styled.div`
`;

const Footer = styled.div`
    // position: fixed;
    // bottom: 0;
    // height: 16px;
    // background-color: black;
    // width: 100%;
`;

const Mp3Container = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Page = styled.div`
    min-height:100vh; 
    display:flex; 
    flex-direction:column; 
    justify-content:space-between;
`;

const Unreleased = () => {
    const isMobile = detectMob();
    const width = isMobile ? '90vw' : '50vw';
    const location = isMobile ? '5%' : '45%';
    // const prepend = "https://github.com/ianfergi/quietknot/blob/main/public/audio/1-13-22_1.mp3?raw=true";
    const prepend = "https://github.com/ianfergi/quietknot/blob/main/public";

    return (
        <Page>
            <Main>
                <SideNav/>
                <Screen title={'Unreleased'} width={width} x={location} y={'0'}>
                    <AboutContainer>
                        <p>I have a bunch of music that I don't really like or feel like finishing, so here's where it will live.</p>
                        <p>Feel free to do whatever you want with this stuff :)</p>
                    {/* <Image src="/images/img001.jpg"></Image> */}
                    {/* You can reach me at quietknotmusic@gmail.com or instagram @quietknot_ */}
                    </AboutContainer>
                </Screen>
                <Screen title={'Music'} width={width} x={location} y={'30vh'}>
                    <Mp3Container>
                        <Mp3Player title={"De Maci"} audioSrc={prepend + "/audio/de_maci.mp3"} />
                        <Mp3Player title={"Right"} audioSrc={prepend + "/audio/right.mp3"} />
                        <Mp3Player title={"Synth Song 2"} audioSrc={prepend + "/audio/synth_song_2.mp3"} />
                        <Mp3Player title={"Thud"} audioSrc={prepend + "/audio/thud.mp3"} />
                        <Mp3Player title={"Try"} audioSrc={prepend + "/audio/try_1.mp3"} />
                        <Mp3Player title={"Egg"} audioSrc={prepend + "/audio/egg.mp3"} />
                        <Mp3Player title={"Slide"} audioSrc={prepend + "/audio/slide.mp3"} />
                        <Mp3Player title={"Stray Thought"} audioSrc={prepend + "/audio/stray_thought.mp3"} />
                        <Mp3Player title={"1-13-22_1"} audioSrc={prepend + "/audio/1-13-22_1.mp3"} />
                        <Mp3Player title={"1-17-22"} audioSrc={prepend + "/audio/1-17-22.mp3"} />
                        <Mp3Player title={"1-23-2021"} audioSrc={prepend + "/audio/1-23-2021.mp3"} />
                        <Mp3Player title={"5-6-22-2"} audioSrc={prepend + "/audio/5-6-22-2.mp3"} />
                        <Mp3Player title={"Basso Not"} audioSrc={prepend + "/audio/basso_not_1.mp3"} />
                        <Mp3Player title={"Into Earth"} audioSrc={prepend + "/audio/into-earth-2.mp3"} />
                        <Mp3Player title={"Your World"} audioSrc={prepend + "/audio/yourworld.mp3"} />
                    </Mp3Container>
                </Screen>
            </Main>
            <Footer />
            </Page>
    );
};

export default Unreleased;