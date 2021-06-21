import styled from 'styled-components';

export const StyledError = styled.div`
  background-color: darkblue;
  color: white;
  text-shadow: 1px 1px 0px;
  font-family: Gill Sans, sans-serif;
  text-align: center;
  padding: 12px;
  letter-spacing: 2px;
  border-radius: 6px;
  border: 0.5px solid darkred;
`;
export const StyledXButton = styled.span`
  &:after {
    content: 'X';
  }
  cursor: pointer;
  float: right;
  &:hover {
    color: grey;
  }
`;

export const PositionedSpinnerDiv = styled.div`
  margin: auto;
  width: 1%;
`;
