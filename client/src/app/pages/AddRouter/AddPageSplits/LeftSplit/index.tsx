import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  LeftContent;
}
export function LeftSplit(props: Props) {
  return (
    <Wrapper>
      <Title>
        <span>Add user auth</span>
      </Title>
      <Content>
        <props.LeftContent />
      </Content>
    </Wrapper>
  );
}

const Content = styled.div``;
const Wrapper = styled.div`
  font-size: 16px;
`;

const Title = styled.div`
  height: 65px;
  text-align: center;
  span {
    line-height: 60px;
    letter-spacing: 1.5px;
    font-size: 18px;
    -webkit-animation-name: rotateInDownLeft;
    animation-name: rotateInDownLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    @-webkit-keyframes rotateInDownLeft {
      0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }
      100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1;
      }
    }
    @keyframes rotateInDownLeft {
      0% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate3d(0, 0, 1, -45deg);
        transform: rotate3d(0, 0, 1, -45deg);
        opacity: 0;
      }
      100% {
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: none;
        transform: none;
        opacity: 1;
      }
    }
  }
  border-bottom: 1px solid lightblue;
`;
