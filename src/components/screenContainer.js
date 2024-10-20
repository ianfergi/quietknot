import React, { useState } from "react";
import styled from "styled-components";
import Draggable from 'react-draggable'

const VARIANT = {
  V1: 'V1',
  V2: 'V2',
};

const BaseContainer = styled.div`
  border: 2px solid black;
  width: ${props => props.width};
  height: ${props => props?.height};
  position: absolute;
  top: ${props => props.y};
  left: ${props => props.x};
  background-color: #f1f1f1;;
  z-index: ${props => props?.isTop ? `999` : `0`};

  ${props => props?.variant === VARIANT.V2 && `
    border-bottom: 4px #686767 solid;
    border-right: 4px #686767 solid;
    border-left: 4px white solid;
    border-top: 4px white solid;
    outline-offset: 0px;
    outline: 1px solid black;
    background-color: black;
    color: white;
    position: unset;
  `}
`;

const TopTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid black;
  background-color: aquamarine;

  ${props => props?.variant === VARIANT.V2 && `
    outline-offset: 0px;
    outline: 1px solid black;
    border-bottom: unset;
    background-color: blue;
  `}
`;

const CloseButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  border: unset;
  position: relative;
  left: 0;
  border-left: 2px solid black;
  cursor: pointer;
`;

const TabText = styled.p`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 8px;
  font-family: 'Syne Mono', monospace;

  ${props => props?.variant === VARIANT.V2 && `
    padding-left: 4px;
  `}
`;

const Content = styled.div`
  ${props => props?.variant === VARIANT.V2 && `
    padding: 8px 16px 8px 16px;
    white-space: pre-line;
  `}
`;

const ScreenContainer = ({width, height, x, y, children, title, top, setTop, id, className, isDraggable, variant}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => setIsOpen(!isOpen);

    if (!isOpen) {
      return (<></>);
    } else {
      if (isDraggable) {
        return (
          <Draggable positionOffset={{x, y}} style={{position: "absolute", 'padding-bottom': "8px"}} cancel={'.button'} onStart={setTop(id)}>
            <BaseContainer variant={variant} className={className} width={width} height={height} isTop={(top === id)} onClick={setTop(id)}>
              <TopTab variant={variant}>
                <TabText variant={variant}>{title}</TabText>
                <CloseButton variant={variant} className="button" onClick={toggleOpen}>&times;</CloseButton>
              </TopTab>
              <Content variant={variant} className="button">
                {children}
              </Content>
            </BaseContainer>
          </Draggable>
        )
      } else {
        return (
          <BaseContainer variant={variant} className={className} width={width} height={height} isTop={(top === id)} onClick={setTop(id)}>
            <TopTab variant={variant}>
              <TabText variant={variant}>{title}</TabText>
              <CloseButton variant={variant} className="button" onClick={toggleOpen}>&times;</CloseButton>
            </TopTab>
            <Content variant={variant} className="button">
              {children}
            </Content>
          </BaseContainer>
        )
      }

    }
}

ScreenContainer.defaultProps = {
  x: "1%", 
  y: "1%", 
  children: null, 
  title: "Title",
  top: 0, 
  setTop: () => {},
  id: 0,
  className: "",
  isDraggable: true,
  variant: VARIANT.V1,
}

export default ScreenContainer;

export { VARIANT };