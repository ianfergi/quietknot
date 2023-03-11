import React from 'react';
import styled from 'styled-components';
import SideNav from '../components/sideNav';
import ScreenContainer from '../components/screenContainer';
import { detectMob, routeTo } from '../utils';

const AboutContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
`;

const Image = styled.img`
    width: 100%;
`;

const Screen = styled(ScreenContainer)`
    margin-bottom: 8px;
    max-width: 500px;
`;

const Main = styled.div`
    padding-bottom: 8px;
`;

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    height: 8px;
`;

const LinkBox = styled.button`
    padding: unset;
    border-radius: unset;
    border: unset;
    border-bottom: 4px #686767 solid;
    border-right: 4px #686767 solid;
    border-left: 4px white solid;
    border-top: 4px white solid;

    outline-offset: 0px;
    outline: 1px solid black;

    :active { 
        border-top: 4px #686767 solid;
        border-left: 4px #686767 solid;
        border-right: 4px white solid;
        border-bottom: 4px white solid;
    }


    position: relative;
    // left: -${props => props?.x}px;
    // right: ${props => props?.x}px;
    filter: drop-shadow(2px 2px 2px aquamarine);
`;

const BorderBox = styled.div`
    border-left: 4px solid #e6e6e6;
    border-top: 4px solid #e6e6e6;
    border-right: 4px solid grey;
    border-bottom: 4px solid grey;
    background-color: #cfcfcf;

    :active {
        border-right: 4px solid #e6e6e6;
        border-bottom: 4px solid #e6e6e6;
        border-left: 4px solid grey;
        border-top: 4px solid grey;
        background-color: aquamarine;
    }

    :hover {
        outline-offset: -8px;
        outline: 1px dashed black;
    }

    height: 26px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 8px;
    padding: 8px;
    font-family: 'Syne Mono', monospace;
    text-shadow: 2px 2px grey;
    font-size: 24px;
`

const Icon = styled.img`
    position: absolute;
    left: 16px;
    height: 24px;
    width: 24px;
    -webkit-filter: drop-shadow(2px 2px #666666);
    filter: drop-shadow(2px 2px #666666);
`

const BONES_SPOTIFY_LINK = "https://open.spotify.com/album/7cFU3NJ8AEvR1NpgJmsmiD";
const BONES_BANDCAMP_LINK = "https://ianmferguson.bandcamp.com/album/bones";
const GO_FISH_ALBUM_LINK = "https://open.spotify.com/album/0DmkVesRp0WCBFe2Pe3UJD";
const GO_FISH_BANDCAMP_LINK = "https://ianmferguson.bandcamp.com/album/go-fish";
const SPOTIFY_IMAGE_LINK = '/images/spotify_icon.png';
const BANDCAMP_IMG_LINK = '/images/bandcamp_icon.png';

const Music = () => {

    const x = detectMob() ? '5%' : '35vw';

    return (
        <Main>
            <SideNav/>
            <Screen title={'Go Fish'} width={'90vw'} x={x} y={'0'}>
                <AboutContainer>


                My newest album that comes out March 16th, 2023!
                
                A bit heavier than my previous, I felt like making rock songs :)
                <Image src="/images/go_fish.png"></Image>

                <LinkBox id='movebutton' href={GO_FISH_ALBUM_LINK} onClick={routeTo(GO_FISH_ALBUM_LINK)}>
                    <BorderBox>
                        <Icon src={SPOTIFY_IMAGE_LINK}/>
                        {"Spotify"}
                    </BorderBox>
                </LinkBox>

                <LinkBox id='movebutton' href={GO_FISH_BANDCAMP_LINK} onClick={routeTo(GO_FISH_BANDCAMP_LINK)}>
                    <BorderBox>
                        <Icon src={BANDCAMP_IMG_LINK}/>
                        {"Bandcamp"}
                    </BorderBox>
                </LinkBox>

                </AboutContainer>
            </Screen>

            <Screen title={'Bones'} width={'90vw'} x={x} y={'105%'}>
                <AboutContainer>
                My first album, came out October 2022. I'm proud of this album but I think its kind of bad lol.

                <Image src="/images/bonesalbum.jpg"></Image>

                <LinkBox id='movebutton' href={BONES_SPOTIFY_LINK} onClick={routeTo(BONES_SPOTIFY_LINK)}>
                    <BorderBox>
                        <Icon src={SPOTIFY_IMAGE_LINK}/>
                        {"Spotify"}
                    </BorderBox>
                </LinkBox>

                <LinkBox id='movebutton' href={BONES_BANDCAMP_LINK} onClick={routeTo(BONES_BANDCAMP_LINK)}>
                    <BorderBox>
                        <Icon src={BANDCAMP_IMG_LINK}/>
                        {"Bandcamp"}
                    </BorderBox>
                </LinkBox>

                </AboutContainer>
            </Screen>
            <Footer />
        </Main>
    );
};

export default Music;