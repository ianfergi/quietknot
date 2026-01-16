import React, { useState } from "react";
import styled from "styled-components";
import ScreenContainer from "./screenContainer";
import Mp3 from "./tabs/Mp3";
import { detectMob, routeTo } from "../utils";
import OldButton from "./reusable/OldButton";

const Iframe = styled.iframe`
    position: sticky;
    z-index: 0;
`;

const Container = styled.div`
    position: absolute;

    .spotify {
        background-color: #282828
    }
`;

const IntroTxt = styled.p`
    padding: 8px;
    margin: unset;

    h4 {
        font-size: 18px;
        font-weight: 500;
        margin: 8px 0px 8px 0;
        text-align: center;
    }

    p {
        margin: 8px 0px 8px 0px;
    }

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

const StyledImg = styled.img`
    max-width: 200px;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
`;

const LinkBox = styled.button`
    padding: unset;
    border-radius: unset;
    border: unset;
    border-bottom: 4px #686767 solid;
    border-right: 4px #686767 solid;
    border-left: 4px white solid;
    border-top: 4px white solid;
    cursor: pointer;

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

const LinkBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const BonesFullAlbum = () => {
    return (
        <Iframe width="99%" src="https://www.youtube.com/embed/yTwzA82Nfm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
    )
}

const Spotify = () => {
    return (
        <Iframe src="https://open.spotify.com/embed/artist/53nv6nCxeXGPc6fAUyzmkp?utm_source=generator&theme=0" width="98%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
    )
}

const Cry = () => {
    return (
        <Iframe width="100%" src="https://www.youtube.com/embed/xPoY0g7Qov8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
    )
}

const Aches = () => {
    return (
        <Iframe width="99%" height="120px" src="https://bandcamp.com/EmbeddedPlayer/album=4019685760/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://ianmferguson.bandcamp.com/album/aches-demos">Aches - Demos by Ian Ferguson</a></Iframe>
    );
}

const Instagram = () => {
    return (
        <div>
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/quietknot_/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" styles=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                <div styles="padding:16px;">
                    <a href="https://www.instagram.com/quietknot_/?utm_source=ig_embed&amp;utm_campaign=loading" styles=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;">
                        <div styles="display: flex; flex-direction: row; align-items: center;">
                            <div styles="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                            <div styles="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                                <div styles=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                                <div styles=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                            </div>
                        </div>
                        <div styles="padding: 19% 0;"></div>
                        <div styles="display:block; height:50px; margin:0 auto 12px; width:50px;">
                            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                        <g>
                                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div styles="padding-top: 8px;">
                            <div styles=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-styles:normal; font-weight:550; line-height:18px;">View this profile on Instagram</div>
                        </div>
                        <div styles="padding: 12.5% 0;"></div>
                        <div styles="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                            <div>
                                <div styles="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
                                <div styles="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div>
                                <div styles="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div>
                            </div>
                            <div styles="margin-left: 8px;">
                                <div styles=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>
                                <div styles=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div>
                            </div>
                            <div styles="margin-left: auto;">
                                <div styles=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
                                <div styles=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>
                                <div styles=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div>
                            </div>
                        </div>
                        <div styles="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
                            <div styles=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>
                            <div styles=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
                        </div>
                    </a>
                    <p styles=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
                        <a href="https://www.instagram.com/quietknot_/?utm_source=ig_embed&amp;utm_campaign=loading" styles=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-styles:normal; font-weight:normal; line-height:17px;">ian</a> (@
                        <a href="https://www.instagram.com/quietknot_/?utm_source=ig_embed&amp;utm_campaign=loading" styles=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-styles:normal; font-weight:normal; line-height:17px;">quietknot_</a>) • Instagram photos and videos
                    </p>
                </div>
            </blockquote>
        </div>
    )
};

const TikTok = () => {
    return (
        <>
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@quietknot_" data-unique-id="quietknot_" data-embed-type="creator" styles="max-width: 720px; min-width: 288px;" > <section> <a href="https://www.tiktok.com/@quietknot_?refer=creator_embed">@quietknot_</a> </section> </blockquote>
        </>
    )
};

const FlameheartJr = () => {
    return (
        <>
            <Iframe width="99%" src="https://www.youtube.com/embed/jySEbFqSzco?si=HAr3yQ0ho1vSoP3G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Iframe>
        </>
    )
}

const Intro = () => {
    return (
        <IntroTxt>
            <h4>Welcome to <strong> quietknot.com</strong>!</h4>
            <p>Here you will find some stuff about <span className='rainbow-text'>quietknot</span> and my music {`:)`} </p>
            <p>Feel free to take a look around and, as always, let me know what you think! </p>
            <p>{'<3'} - Ian</p>
        </IntroTxt>
    )
}

const NewAlbum = () => {
    return (
        <IntroTxt>
            <h4><strong>tough luck OUT NOW!!</strong></h4>
            <p>My awesome new album <span className='rainbow-text'>tough luck</span> is now out!!!</p>
            <StyledImg src="/images/tough_luck.png" onClick={routeTo(TOUGH_LUCK_SPOTIFY_LINK)}></StyledImg>
            <p>Rock songs and other fun stuff. Please give it a spin and let me know what you think!
            </p>
            <LinkBoxContainer>
                <LinkBox id='movebutton' href={TOUGH_LUCK_SPOTIFY_LINK} onClick={routeTo(TOUGH_LUCK_SPOTIFY_LINK)}>
                    <BorderBox>
                        <Icon src={SPOTIFY_IMAGE_LINK}/>
                        {"Spotify"}
                    </BorderBox>
                </LinkBox>

                <LinkBox id='movebutton' href={TOUGH_LUCK_BANDCAMP_LINK} onClick={routeTo(TOUGH_LUCK_BANDCAMP_LINK)}>
                    <BorderBox>
                        <Icon src={BANDCAMP_IMG_LINK}/>
                        {"Bandcamp (CDs!)"}
                    </BorderBox>
                </LinkBox>
            </LinkBoxContainer>
        </IntroTxt>
    )
}

const GO_FISH_ALBUM_LINK = "https://open.spotify.com/album/0DmkVesRp0WCBFe2Pe3UJD";
const GO_FISH_BANDCAMP_LINK = "https://ianmferguson.bandcamp.com/album/go-fish";
const SPOTIFY_IMAGE_LINK = '/images/spotify_icon.png';
const BANDCAMP_IMG_LINK = '/images/bandcamp_icon.png';
const YOUTUBE_IMG_LINK = '/images/youtube_icon.png';
const GO_FISH_YT_LINK = 'https://www.youtube.com/watch?v=3bfSoCL0tyA';
const WORD_SCIENCE_PRE_SAVE_LINK = "https://open.spotify.com/album/6cJtwOvxUnpCJ1v8ZqCsDY";
const WORD_SCIENCE_BANDCAMP_LINK = "https://ianmferguson.bandcamp.com/album/word-science";
const SEE_U_SOON_BANDCAMP_LINK = "https://ianmferguson.bandcamp.com/album/see-u-soon";
const SEE_U_SOON_PRE_SAVE_LINK = "https://distrokid.com/hyperfollow/quietknot2/see-u-soon";
const SEE_U_SOON_SPOTIFY_LINK = "https://open.spotify.com/album/7Ift1kYO8sagPQqJ6PpbmW";
const TOUGH_LUCK_SPOTIFY_LINK = "https://open.spotify.com/album/5yWMROQrY4zO8cE8HdSzLh";
const TOUGH_LUCK_BANDCAMP_LINK = "https://ianmferguson.bandcamp.com/album/tough-luck";


const NewAlbumOut = () => {
    return (
        <IntroTxt>
            <h4><strong>New Album "Go Fish"</strong><p><span className='rainbow-text'>OUT NOW</span></p></h4>
            <StyledImg src="/images/go_fish.png"></StyledImg>
            <p>I'm super excited to share what I've been working on recently. Please take a listen and let me know what you
                think!
            </p>
            <ButtonContainer>
                <OldButton uri={GO_FISH_ALBUM_LINK} text={"Spotify"} imageSrc={SPOTIFY_IMAGE_LINK} />
                <OldButton uri={GO_FISH_BANDCAMP_LINK} text={"Bandcamp"} imageSrc={BANDCAMP_IMG_LINK} />
                <OldButton uri={GO_FISH_YT_LINK} text={"Youtube"} imageSrc={YOUTUBE_IMG_LINK} />
            </ButtonContainer>
        </IntroTxt>
    )
}

const MOBILE_TABS = [
    {
        title: 'Hello',
        width: '90vw',
        x: '4%',
        y: '40%',
        id: 1,
        component: Intro,
    },
    {
        title: 'Flameheart Jr <3',
        width: '90vw',
        x: '2%',
        y: '700%',
        id: 1,
        component: FlameheartJr,
    },
    {
        title: 'NEW ALBUM OUT JAN 16TH',
        width: '90vw',
        x: '4%',
        y: '10%',
        id: 1,
        component: NewAlbum,
    },
    {
        title: 'Bones - Full Album :)',
        width: '70vw',
        x: '2%',
        y: '0%',
        id: 2,
        component: BonesFullAlbum,
    },
    // {
    //     title: 'Album Art / Film Photos',
    //     width: '30vh',
    //     x: '13%',
    //     y: '120%',
    //     id: 4,
    //     component: BonesFullAlbum,
    // },
    {
        title: 'Instagram :3',
        x: '5%',
        y: '150%',
        id: 5,
        component: Instagram,
    },
    {
        title: 'Quietknot Spotify',
        width: '90vw',
        x: '10%',
        y: '350%',
        id: 3,
        className: "spotify",
        component: Spotify,
    },
    {
        title: 'Tiktok',
        width: '70vw',
        x: '20%',
        y: '180%',
        id: 6,
        component: TikTok,
    },
    {
        title: 'Cry',
        width: '60vw',
        x: '35%',
        y: '500%',
        id: 7,
        component: Cry,
    },
    {
        title: 'Aches - Demos',
        width: '90vw',
        // height: '600px',
        x: '5%',
        y: '700%',
        id: 8,
        component: Aches,
    },
    {
        title: 'Mp3 Player',
        width: '80vw',
        x: '5%',
        y: '150%',
        id: 9,
        component: Mp3,
    },
];

const DESKTOP_TABS = [
    {
        title: 'Hello',
        width: '40vw',
        x: '70%',
        y: '40%',
        id: 1,
        component: Intro,
    },
    {
        title: 'Flameheart Jr <3',
        width: '30vw',
        x: '180%',
        y: '440%',
        id: 2,
        component: FlameheartJr,
    },
    {
        title: 'NEW ALBUM OUT JAN 16TH',
        width: '40vw',
        x: '70%',
        y: '15%',
        id: 1,
        component: NewAlbum,
    },
    {
        title: 'Bones - Full Album :)',
        width: '30vw',
        x: '2%',
        y: '0%',
        id: 2,
        component: BonesFullAlbum,
    },
    // {
    //     title: 'Album Art / Film Photos',
    //     width: '30vh',
    //     x: '13%',
    //     y: '120%',
    //     id: 4,
    //     component: BonesFullAlbum,
    // },
    {
        title: 'Instagram :3',
        x: '150%',
        y: '100%',
        id: 6,
        component: Instagram,
    },
    {
        title: 'Quietknot Spotify',
        width: '30vw',
        x: '20%',
        y: '250%',
        id: 3,
        className: "spotify",
        component: Spotify,
    },
    {
        title: 'Tiktok',
        width: '40vw',
        x: '140%',
        y: '50%',
        id: 5,
        component: TikTok,
    },
    {
        title: 'Cry',
        width: '20vw',
        x: '35%',
        y: '240%',
        id: 7,
        component: Cry,
    },
    {
        title: 'Aches - Demos',
        width: '30vw',
        // height: '600px',
        x: '70%',
        y: '420%',
        id: 8,
        component: Aches,
    },
    {
        title: 'Mp3 Player',
        width: '40vw',
        x: '130%',
        y: '-20%',
        id: 9,
        component: Mp3,
    },
];

const Tabs = () => {
    const [top, setTop] = useState(1);

    const dragHandler = (id) => () => {
        setTop(id);
    }

    const isMobile = detectMob();
    const tabs = isMobile ? MOBILE_TABS : DESKTOP_TABS;

    return (
        <Container>
            {tabs.map((tab) => {
                return <ScreenContainer width={tab?.width} height={tab?.height} x={tab?.x} y={tab?.y} title={tab?.title} id={tab.id} top={top} setTop={dragHandler} className={tab?.className}>{tab.component()}</ScreenContainer>
            })}

        </Container>
    )
}

export default Tabs;