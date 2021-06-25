import * as React from 'react';
import styled from 'styled-components/macro';
import { ControlLeft, ControlRight } from './Splits';

interface Props {}
export function ControlPage(props: Props) {
  return (
    <Container>
      <LeftWrapper>
        <ControlLeft />
      </LeftWrapper>
      <RightWrapper>
        <ControlRight />
      </RightWrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
const LeftWrapper = styled.div`
  border-right: 1px solid;
  width: 50%;
`;
const RightWrapper = styled.div`
  width: 50%;
  min-width: 309px;
`;
