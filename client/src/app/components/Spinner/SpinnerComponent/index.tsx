import React from 'react';
import { StyledSpinner, SpinnerDiv} from './StyledSpinner';

export function SpinnerComponent() {
  return (
  <SpinnerDiv>
    <StyledSpinner>
      <div className="container">
        <div className="circle circle-red"></div>
        <div className="circle circle-blue"></div>
        <div className="circle circle-green"></div>
      </div>
    </StyledSpinner>
    </SpinnerDiv>
  );
}
