import React from "react";
import styled from "styled-components";
import SideNav from "../components/sideNav";
import ScreenContainer from "../components/screenContainer";

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

const Merch = () => {
    return (
        <>
            <SideNav />
            <Screen title={"Merch"} width={'90vw'} x={'5%'} y={'0'}>
                <Container>
                <AboutContainer>
                No merch yet, will probably try to sell a couple CDs or tapes of my next release, <span className="rainbow-text">stay tuned :)</span>
                </AboutContainer>
                <Image src="/images/cd2.gif"></Image>

                </Container>
            </Screen>
        </>
    )
};

export default Merch;