import React, { useState } from "react";
import styled from "styled-components";
import ScreenContainer from "./screenContainer";
import ImageCar from './ImageCar';

const Iframe = styled.iframe`
    position: sticky;
    z-index: 0;
`;

const Container = styled.div`
    position: absolute;
`;

const IntroTxt = styled.p`
    padding: 8px;
    margin: unset;
`;

const BonesFullAlbum = () => {
    return (
        <Iframe width="100%" src="https://www.youtube.com/embed/yTwzA82Nfm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
    )
}

const Spotify = () => {
    return (
        <Iframe src="https://open.spotify.com/embed/artist/53nv6nCxeXGPc6fAUyzmkp?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Iframe>
    )
}

const Cry = () => {
    return (
        <Iframe width="100%" src="https://www.youtube.com/embed/xPoY0g7Qov8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
    )
}

const Aches = () => {
    return (
        <Iframe width="100%" height="100%" src="https://bandcamp.com/EmbeddedPlayer/album=4019685760/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://ianmferguson.bandcamp.com/album/aches-demos">Aches - Demos by Ian Ferguson</a></Iframe>
    )
}

const Instagram = (
        <div>
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/quietknot_/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" styles=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                <div styles="padding:16px;">
                    <a href="https://www.instagram.com/quietknot_/?utm_source=ig_embed&amp;utm_campaign=loading" styles=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
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
                        <a href="https://www.instagram.com/quietknot_/?utm_source=ig_embed&amp;utm_campaign=loading" styles=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-styles:normal; font-weight:normal; line-height:17px;" target="_blank">ian</a> (@
                        <a href="https://www.instagram.com/quietknot_/?utm_source=ig_embed&amp;utm_campaign=loading" styles=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-styles:normal; font-weight:normal; line-height:17px;" target="_blank">quietknot_</a>) • Instagram photos and videos
                    </p>
                </div>
            </blockquote>
        </div>
    );

const TikTok = (
    <>
        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@quietknot_" data-unique-id="quietknot_" data-embed-type="creator" styles="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@quietknot_?refer=creator_embed">@quietknot_</a> </section> </blockquote>
    </>
)

const Intro = () => {
    return (
        <IntroTxt>
            <p>Hello. welcome to <strong> quietknot.com</strong>!</p>
            <p>Here you will find some cool and interesting stuff about quietknot and my music {`:)`} </p>
            <p>Feel free to take a look around and, as allways, let me know what you think! </p>
            <p>{'<3'} - Ian</p>
        </IntroTxt>
    )
}

const Tabs = () => {
    const [top, setTop] = useState(1);

    const dragHandler = (id) => () => {
        console.log(id);
        setTop(id);
    }

    return (
        <Container>
            <ScreenContainer width={'40vh'} x={"40%"} y={"30%"} title={"Hello"} top={top} setTop={dragHandler} id={1}>{Intro()}</ScreenContainer>
            <ScreenContainer width={'40vh'} x={"4%"} y={"0%"} title={"Bones - Full Album :)"} top={top} setTop={dragHandler} id={2}>{BonesFullAlbum()}</ScreenContainer>
            <ImageCar width={'30vh'} x={"13%"} y={"120%"} title={"Album Art / Film Photos"} top={top} setTop={dragHandler} id={4}/>
            <ScreenContainer x={"5%"} y={"150%"} title={"Instagram :3"} top={top} setTop={dragHandler} id={5}>{Instagram}</ScreenContainer>
            <ScreenContainer width={'40vh'} x={"20%"} y={"350%"} title={"Quietknot Spotify"} top={top} setTop={dragHandler} id={3}>{Spotify()}</ScreenContainer>
            <ScreenContainer width={'40vh'} x={"15%"} y={"150%"} title={"TikTok"} top={top} setTop={dragHandler} id={6}>{TikTok}</ScreenContainer>
            <ScreenContainer width={'40vh'} x={"40%"} y={"500%"} title={"Cry"} top={top} setTop={dragHandler} id={7}>{Cry()}</ScreenContainer>
            <ScreenContainer width={'40vh'} height={'430px'} x={"5%"} y={"270%"} title={"Aches - Demos"} top={top} setTop={dragHandler} id={8}>{Aches()}</ScreenContainer>

        </Container>
    )
}

export default Tabs;