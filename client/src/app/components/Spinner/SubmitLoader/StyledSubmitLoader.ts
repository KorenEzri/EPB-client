import styled from 'styled-components';
export const StyledSubmitLoader = styled.div`
  .loader {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .dot {
    width: 0.75em;
    height: 0.75em;
    border-radius: 50%;
    background: #fafafa;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
  }
  @keyframes loader_left {
    0% {
      opacity: 0.8;
    }
    20% {
      opacity: 0.3;
    }
    40% {
      opacity: 0.8;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes loader_middle {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 0.8;
    }
    40% {
      opacity: 0.3;
    }
    60% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes loader_right {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    40% {
      opacity: 0.8;
    }
    60% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
  .dot:nth-of-type(1) {
    animation-name: loader_left;
  }
  .dot:nth-of-type(2) {
    animation-name: loader_middle;
  }
  .dot:nth-of-type(3) {
    animation-name: loader_right;
  }
`;
export const LoaderWrapper = styled.div`
  position: relative;
  margin: auto;
  right: 30px;
  top: -15px;
  width: 100%;
`;
