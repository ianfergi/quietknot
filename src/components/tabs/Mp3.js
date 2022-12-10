import React from "react";
import styled from "styled-components";

const IntroTxt = styled.p`
padding: 8px;
margin: unset;

@keyframes animatedBackground_a {
    0% { background-position: 0 0 }
    100% { background-position: -500px 0 }
}

.rainbow-text {
    text-shadow: #A3A3A3 1px 1px 1px;
    background-image: -webkit-linear-gradient(left, #f00, #ff2b00, #f50, #ff8000, #fa0, #ffd500, #ff0, #d4ff00, #af0, #80ff00, #5f0, #2bff00, #0f0, #00ff2a, #0f5, #00ff80, #0fa, #00ffd5, #0ff, #00d5ff, #0af, #0080ff, #05f, #002aff, #00f, #2b00ff, #50f, #8000ff, #a0f, #d400ff, #f0f, #ff00d4, #f0a, #ff0080, #f05, #ff002b, #f00);
    -webkit-animation: animatedBackground_a 5s linear infinite alternate;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
    font-size: 18px;
    font-weight: 500;
}

.fire-text {
    background-image: linear-gradient(0deg, #f00 25%, #ffb300 60%);
    color: #0000;
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: bold;
    display: inline-block;
}
`;

const Mp3Box = styled.div`
padding: 8px;
`;

const Mp3Box2 = styled.div`
display: flex;
flex-direction: row;
background-color: grey;
padding: 4px;
align-items: center;
gap: 4px;
border: 2px solid black;
`;

const CatSpin = styled.img`
max-width: 25%;
max-height: 25%;
border: 2px solid transparent;
border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
border-image-slice: 1;
`;

const Mp3 = () => {
    return (
        <Mp3Box>

            <IntroTxt>Now Playing: Quietknot: <span className='fire-text'>Burning</span></IntroTxt>
            <Mp3Box2>
                <CatSpin src='/images/cat-dance.gif' />
                <audio controls>
                    <source src="/audio/burning.mp3" type="audio/mp3" />
                </audio>
            </Mp3Box2>
        </Mp3Box>
    )
}

export default Mp3;