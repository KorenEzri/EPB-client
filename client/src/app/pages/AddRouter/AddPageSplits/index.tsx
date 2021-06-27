/**
 *
 * AddPageSplits
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { LeftSplit } from './LeftSplit/Loadable';
import { RightSplit } from './RightSplit/Loadable';

interface Props {
  LeftContent;
  leftTitle:string;
  rightContent;
}

export function AddPageSplits(props: Props) {
  return (
    <Container>
      <LeftWrapper>
        <LeftSplit leftTitle={props.leftTitle} LeftContent={props.LeftContent} />
      </LeftWrapper>
      <RightWrapper>
        <RightSplit rightContent={props.rightContent} />
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
