import React, { useState } from "react";
import styled from "styled-components";
import SideNav from "../components/sideNav";

const LINKS = [
    {
        title: 'Spotify',
        href: 'https://open.spotify.com/artist/53nv6nCxeXGPc6fAUyzmkp',
        img: '/images/spotify_icon.png',
    },
    {
        title: 'Youtube',
        href: 'https://www.youtube.com/@quietknot',
        img: '/images/youtube_icon.png',
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/quietknot_/',
        img: '/images/instagram_icon.png',
    },
    {
        title: 'Bandcamp',
        href: 'https://ianmferguson.bandcamp.com/',
        img: '/images/bandcamp_icon.png',
    },
    {
        title: 'Tiktok',
        href: 'https://www.tiktok.com/@quietknot_',
        img: '/images/tiktok_icon.png',
    },

];

const Container = styled.div`
    padding: 32px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

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

const Links = () => {
    const active = true;
    // const [initialX, setInitalX] = useState(false);
    // const [startingX, setStartingX] = useState(0);
    // const [diff, setDiff] = useState(0);
    // const [shareOpen, setShareOpen] = useState(false);
    // // let x = 10;
    // var resizeTimeout;

    // var obj = document.getElementById('movebutton');
    // if (obj) {
    //     obj.addEventListener('touchmove', function(event) {
    //         if (resizeTimeout) {
    //             clearTimeout(resizeTimeout);
    //         }
    //         setTimeout(function () {
    //             if (event.targetTouches.length == 1) {
    //                 var touch = event.targetTouches[0];
    //                 if (!initialX) {
    //                     setInitalX(true);
    //                     setStartingX(touch.pageX);
    //                 } else {
    //                     const diff = startingX - touch.pageX
    //                     if (diff > 40) {
    //                         setShareOpen(true);
    //                     } else {
    //                         setDiff(diff);
    //                     }
    //                 }
    //             }
    //         }, 100)
    //     }, false);
    //     console.log("asdasdfasfaasdfsdf");

    //     obj.addEventListener('touchend', function(event) {
    //         setInitalX(false);
    //     }, false);
    // }

    const routeTo = (href) => () => {
        window.location.href = href;
    };


    return (
        <>  
            <SideNav/>
            <Container>
                {LINKS.map((link) => {
                    return (
                        <LinkBox id='movebutton' href={link.href} onClick={routeTo(link.href)}>
                            <BorderBox>
                                <Icon src={link.img}/>
                                {link.title}
                            </BorderBox>
                         </LinkBox>
                    )
                })}

            </Container>
        </>
    );
};

export default Links;