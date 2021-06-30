/**
 *
 * InputSuggestion
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  suggestion: string;
  setter;
}

export function InputSuggestion(props: Props) {
  const { suggestion, setter } = props;
  return (
    <Div>
      <li
        onClick={() => {
         if (setter) setter(suggestion)
         
        }}
      >
        {suggestion}
      </li>
    </Div>
  );
}

const Div = styled.div`
  li {
    cursor: pointer;
    user-select: none;
    padding: 6px;
    &:hover {
      border: 1px solid #3d5866;
    }
  }
`;
