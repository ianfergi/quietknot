import React, { useState } from 'react';
import styled from 'styled-components';
import ScreenContainer from './screenContainer';

const SlideShowContainer = styled.div`
    position: relative;
    margin: auto;
    object-fit: cover;
    display: flex;
      
    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }
`;

const Slide = styled.div`
    animation-name: fade;
    animation-duration: 1.5s;
    height: 100%;
    object-fit: contain;
    flex: 1 1 auto;
`;

const NumberText = styled.div`
    color: #f2f2f2;
    font-size: 20px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
    font-family: 'Syne Mono', monospace;
    -webkit-text-stroke: .5px black; /* width and color */
`;

const CaptionText = styled.div`
    color: #f2f2f2;
    font-size: 16px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    text-align: center;
    font-family: 'Syne Mono', monospace;
    -webkit-text-stroke: .5px black; /* width and color */
    
`;

const Dot = styled.div`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const Backward = styled.div`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 10px;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-text-stroke: .5px black; /* width and color */
`;

const Forward = styled.div`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    right: 0;
    border-radius: 3px 0 0 3px;
    -webkit-text-stroke: 1px black; /* width and color */
`;

const Forward1 = styled.div`
    cursor: pointer;
    position: relative;
    width: 20px;
    height: 20px;

`;

const slideImages = [
    {
      url: '/images/slideshow/img001.jpg',
      caption: "i guess you say things you don't mean"
    },
    {
      url: '/images/slideshow/img002.jpg',
      caption: 'buildin'
    },
    {
      url: '/images/slideshow/img003.jpg',
      caption: 'sky'
    },
    {
      url: '/images/slideshow/img005.jpg',
      caption: 'cry'
    },
    {
      url: '/images/slideshow/img008.jpg',
      caption: 'say yes'
    },
    {
      url: '/images/slideshow/img016.jpg',
      caption: 'prof pic'
    },
    {
      url: '/images/slideshow/img022.jpg',
      caption: 'yt'
    },
    {
      url: '/images/slideshow/img032.jpg',
      caption: 'de maci'
    },
    {
      url: '/images/slideshow/img088.jpg',
      caption: 'aches demos'
    },
  ];
  
  const ImageCar = ({...props}) => {
    
    const [index, setIndex] = useState(0);
    const changeIndex = (up) => () => {
      if (up) {
        if (index == slideImages.length-1) {
          setIndex(0);
        } else {
          setIndex(index+1);
        }
      } else {
        if (index == 0) {
          setIndex(slideImages.length-1);
        } else {
          setIndex(index-1);
        }
      }
    }

    return (
        <ScreenContainer {...props}>
            <SlideShowContainer className={"screen"}>
                <Slide className={"screen"}>
                    <NumberText>{index+1}</NumberText>
                    <Image className={"screen"} src={slideImages[index]?.url} />
                    <CaptionText>{slideImages[index]?.caption}</CaptionText>
                </Slide>
                <Backward className={"screen"} onClick={changeIndex(false)}>❮</Backward>
                <Forward className={"screen"} onClick={changeIndex(true)}>❯</Forward>

            </SlideShowContainer>
        </ScreenContainer>
    )
  }

  export default ImageCar;