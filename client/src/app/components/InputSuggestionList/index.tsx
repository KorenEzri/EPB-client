import * as React from 'react';
import styled from 'styled-components/macro';
import {InputSuggestion} from "./InputSuggestion/Loadable"

interface Props {
  searchResults: string[] | undefined;
  value:string | undefined;
  setter
}

export function InputSuggestionList(props: Props) {
  const { searchResults, setter, value } = props;
  return (
    <Div>
      <ul onClick={()=>{
      if (searchResults)  searchResults.length = 0
      }}>
        {searchResults?.map((result: string, index: number) => {
          if (result === value) {
            searchResults.length = 0
              return
          }
          return <InputSuggestion setter={setter} suggestion={result} key={`${result}suggestion${index}`} />
        })}
      </ul>
    </Div>
  );
}

const Div = styled.div`
text-align: left;
  background-color:#263E52 !important;
  width: 60%;
ul {
  width: 100%;
  margin:5px;
  position:relative;
  right: 35px;
  list-style-type: none;
}
`;
