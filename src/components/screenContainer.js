import React, { useState } from "react";
import styled from "styled-components";
import Draggable from 'react-draggable'

const BaseContainer = styled.div`
  border: 2px solid black;
  width: ${props => props.width};
  height: ${props => props?.height};
  position: absolute;
  top: ${props => props.y};
  left: ${props => props.x};
  background-color: #f1f1f1;;
  z-index: ${props => props?.isTop ? `999` : `0`};
`;

const TopTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid black;
  background-color: aquamarine;
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
`;

const ScreenContainer = ({width, height, x, y, children, title, top, setTop, id, className }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => setIsOpen(!isOpen);

    if (!isOpen) {
      return (<></>);
    } else {
      return (
          <Draggable positionOffset={{x, y}} style={{position: "absolute", 'padding-bottom': "8px"}} cancel={'.button'} onStart={setTop(id)}>
            <BaseContainer className={className} width={width} height={height} isTop={(top === id)} onClick={setTop(id)}>
              <TopTab>
                <TabText>{title}</TabText>
                <CloseButton className="button" onClick={toggleOpen}>&times;</CloseButton>
              </TopTab>
              <div className="button">
                {children}
              </div>
            </BaseContainer>
          </Draggable>
      )
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
}

export default ScreenContainer;