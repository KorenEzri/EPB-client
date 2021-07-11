import * as React from 'react';
import styled from 'styled-components/macro';
import { FromExisting } from '../../Pages';

interface Props {}
interface Expand {
  expand: boolean;
}
interface Color {
  color?: string;
  expand: boolean;
  bkg: string;
}

export function AddCrudPaths(props: Props) {
  const [fromExisting, setFromExisting] = React.useState(false);
  return (
    <Div>
      <OptionsContainer>
        <Option
          bkg="#69bafcd5"
          color="whitesmoke"
          expand={fromExisting}
          onClick={() => {
            setFromExisting(!fromExisting);
          }}
        >
          <p>For an existing database schema</p>
        </Option>
        <ExpandWrapper expand={fromExisting}>
          <FromExisting expanded={fromExisting} />
        </ExpandWrapper>
        <Option
          bkg="#63a4dab7"
          color="white"
          expand={fromExisting}
          onClick={() => {}}
          className="grey_out"
        >
          <p>Create a database schema</p>
        </Option>
        <Option
          bkg="#263E52"
          color="white"
          expand={fromExisting}
          onClick={() => {}}
          className="grey_out"
        >
          <p>No DB</p>
        </Option>
      </OptionsContainer>
    </Div>
  );
}

const Div = styled.div``;
const Option = styled.div<Color>`
  font-size: 18px;
  padding: 16px;
  margin: 6px;
  width: 60%;
  margin: auto;
  height: 120px;
  letter-spacing: 1.5px;
  margin-top: 20px;
  color: ${({ color }) => (color ? color : 'black')};
  background-color: ${({ bkg }) => bkg};
  text-shadow: 1px 1px 1px black;
  box-shadow: 1px 1px 12px black;
  transition: 1500ms;
  cursor: pointer;
  user-select: none;
  &:hover {
    border: 1px solid black;
    transition: 1500ms;
    text-shadow: 1px 1px 1px white;
  }
  &:active {
    border: 1px solid whitesmoke;
    transition: 10ms;
  }
`;
const OptionsContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  .grey_out {
    filter: grayscale(80%);
    &:hover {
      border: unset;
    transition: unset;
    color: unset;
    text-shadow: unset;
    }
  }
`;
const ExpandWrapper = styled.div<Expand>`
  transition: 500ms;
  margin-top: ${({ expand }) => (expand ? '0px;' : '25px;')};
  height: ${({ expand }) => (expand ? '0px;' : 'max-content;')};
`;
