import React from 'react';
import { StyledSubmitLoader, LoaderWrapper } from './StyledSubmitLoader';

export function SubmitLoader() {
  return (
    <LoaderWrapper>
      <StyledSubmitLoader>
        <div className="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </StyledSubmitLoader>
    </LoaderWrapper>
  );
}
