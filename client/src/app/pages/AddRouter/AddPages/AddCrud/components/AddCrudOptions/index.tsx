/**
*
* AddCrudOptions
*
*/
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  setOpts
  Opts
}
interface Color {
  color?: string;
  bkg: string;
}

export function AddCrudOptions(props: Props) {

  return (
  <Div>
    <OptionsContainer>
        <Option
          bkg="#69bafcd5"
          color="whitesmoke"
          onClick={() => {
            props.setOpts(props.Opts.EXISTING);
          }}
        >
          <p>For an existing database schema</p>
        </Option>
        <Option
          bkg="#63a4dab7"
          color="white"
          onClick={() => {
            props.setOpts(props.Opts.CREATE);
          }}
        >
          <p>Create a database schema</p>
        </Option>
        <Option
          bkg="#263E52"
          color="white"
          onClick={() => {
            props.setOpts(props.Opts.NODB);
          }}
        >
          <p>No DB</p>
        </Option>
      </OptionsContainer> 
  </Div>
  );

};

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
`;
