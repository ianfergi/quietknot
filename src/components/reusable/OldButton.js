import React from 'react';
import styled from 'styled-components';
import { routeTo } from '../../utils';

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
`;

const OldButton = ({imageSrc, text, uri}) => {
    return (
        <LinkBox id='movebutton' href={uri} onClick={routeTo(uri)}>
        <BorderBox>
            <Icon src={imageSrc}/>
            {text}
        </BorderBox>
    </LinkBox>
    )
}

export default OldButton;