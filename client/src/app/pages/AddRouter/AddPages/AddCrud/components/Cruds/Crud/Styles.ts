import styled from 'styled-components';
interface Hidden {
  hide: boolean;
}
export const ActionDiv = styled.div<Hidden>`
  cursor: pointer;
  border-bottom: ${({ hide }) => (hide ? '1px solid black' : '0px;')};
  height: 60px;
  line-height: 45px;
  padding: 8px;
  transition: 500ms;
  background-color: ${({ hide }) => (!hide ? '#4d7696' : 'unset;')};
  &:hover {
    transition: 500ms;
    background-color: #4d7696;
  }
  &:active {
    transition: 100ms;
    background-color: #294358;
  }
`;
export const ActionWrapperHidden = styled.div<Hidden>`
  transition: 500ms;
  display: ${({ hide }) => (hide ? 'none' : 'unset')};
`;
export const Wrapper = styled.div<Hidden>`
  user-select: none;
  transition: 500ms;
  border-bottom: ${({ hide }) => (!hide ? '1px solid black' : '0px;')};
`;
export const HiddenContainer = styled.div<Hidden>``;
export const Description = styled.div`
  margin: 6px;
  letter-spacing: 0.5px;
  text-align: justify;
`;
export const Dependencies = styled.div`
  margin: 6px;
  display: flex;
  flex-direction: column;
`;
export const Dependency = styled.div``;
export const DependencySubTitle = styled.div`
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  margin-top: 6px;
  margin-bottom: 6px;
  @-webkit-keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  user-select: none;
  width: 140px;
  padding: 6px;
  margin-left: -6px;
  background-color: #15159c97;
  text-align: center;
  letter-spacing: 1px;
  border-radius: 2px;
`;
export const DescriptionSubTitle = styled.div`
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  @-webkit-keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  user-select: none;
  width: 140px;
  padding: 6px;
  margin-left: -6px;
  background-color: #15159c97;
  text-align: center;
  letter-spacing: 1px;
  border-radius: 2px;
`;
export const GetItButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #9acc85;
  background: linear-gradient(to bottom, #74ad5a 5%, #68a54b 100%);
  background-color: #74ad5a;
  border: 1px solid #3b6e22;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 9px 76px;
  text-decoration: none;
  &:hover {
    background: linear-gradient(to bottom, #68a54b 5%, #74ad5a 100%);
    background-color: #68a54b;
  }
  &:active {
    position: relative;
    top: 1px;
  }
  width: 100%;
  position: relative;
`;
