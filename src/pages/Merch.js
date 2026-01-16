import React from "react";
import styled from "styled-components";
import SideNav from "../components/sideNav";
import ScreenContainer from "../components/screenContainer";
import { detectMob, routeTo } from "../utils";

const AboutContainer = styled.div`
    padding: 8px;
    gap: 8px;
    font-size: 24px;

    .rainbow-text {
        text-shadow: #A3A3A3 1px 1px 1px;
        background-image: -webkit-linear-gradient(left, #f00, #ff2b00, #f50, #ff8000, #fa0, #ffd500, #ff0, #d4ff00, #af0, #80ff00, #5f0, #2bff00, #0f0, #00ff2a, #0f5, #00ff80, #0fa, #00ffd5, #0ff, #00d5ff, #0af, #0080ff, #05f, #002aff, #00f, #2b00ff, #50f, #8000ff, #a0f, #d400ff, #f0f, #ff00d4, #f0a, #ff0080, #f05, #ff002b, #f00);
        -webkit-animation: animatedBackground_a 5s linear infinite alternate;
        -webkit-background-clip: text;
        -webkit-text-fill-color: #0000;
        font-size: 24px;
        font-weight: 500;
    }
`;

const Image = styled.img`
    width: 100%;
    max-width: 400px;
`;

const Screen = styled(ScreenContainer)`
    margin-bottom: 8px;

`;


const Container = styled.div`
    display: flex;
    flex-direction: column;
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
    margin: 0px 16px 0px 16px;
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

const SEE_U_SOON_BANDCAMP_LINK = "https://ianmferguson.bandcamp.com/album/see-u-soon";
const TOUGH_LUCK_BANDCAMP_LINK = "https://ianmferguson.bandcamp.com/album/tough-luck";
const BANDCAMP_IMG_LINK = '/images/bandcamp_icon.png';

const Merch = () => {
    const isMobile = detectMob();
    const width = isMobile ? '90vw' : '40vw';

    return (
        <>
            <SideNav />
            <Screen title={"Merch"} width={width} x={'5%'} y={'0'}>
                <Container>
                <AboutContainer>
                tough luck CDs <span className="rainbow-text">AVAILABLE NOW</span>
                </AboutContainer>
                <LinkBox id='movebutton' href={TOUGH_LUCK_BANDCAMP_LINK} onClick={routeTo(TOUGH_LUCK_BANDCAMP_LINK)}>
                    <BorderBox>
                        <Icon src={BANDCAMP_IMG_LINK}/>
                        {"BUY CD HERE"}
                    </BorderBox>
                </LinkBox>
                <Image src="/images/cd2.gif"></Image>

                </Container>
            </Screen>
        </>
    )
};

export default Merch;