import React, { useState, useMemo } from "react";
import styled from "styled-components";

const Mp3Box2 = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px 16px 8px 16px;
    align-items: center;
    gap: 8px;
    border: 2px solid black;
    font-family: 'Syne Mono', monospace;
    margin: unset;
    color: black;
    text-shadow: 2px 2px black;
    -webkit-text-stroke: 1px whtie; /* width and color */
    text-align: center;
    font-size: 20px;
    height: 42px;
`;

const Button = styled.button`
    border: 0;
    background: transparent;
    box-sizing: border-box;
    max-width: 25px;
    height: 20px;

    border-color: transparent transparent transparent #202020;
    transition: 100ms all ease;
    cursor: pointer;

    // play state
    border-style: solid;
    border-width: 10px 0 10px 20px;

    &.paused {
        border-style: double;
        border-width: 0px 0 0px 15px;
    }

    &:hover {
    border-color: transparent transparent transparent #404040;
    }
`;

const Download = styled.a`
    font-size: 12px;
    color: blue;
    -webkit-text-stroke: 1px blue; /* width and color */
    text-shadow: 1px 1px black;
    right: 32px;
    position: fixed;

`;

const Mp3Player = ({audioSrc, title = "Song", picture}) => {
    const [playing, setPlaying] = useState(false);

    const audio = useMemo(() => {
        return new Audio(audioSrc);
    }, []);

    const togglePlaying = () => {
        if (!playing) {
            audio.play();
            setPlaying(true);
        } else {
            audio.pause();
            setPlaying(false);
        }
    }
  
    return (
      <Mp3Box2 >
        <Button className={playing ? "paused" : ""} onClick={togglePlaying}></Button>
        <text>{title}</text>
        <Download href={audioSrc}>Download </Download>
      </Mp3Box2 >
    );
}

export default Mp3Player;