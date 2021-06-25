import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  LeftContent;
}
export function LeftSplit(props: Props) {
  return (
    <Wrapper>
      <Content>
        <props.LeftContent />
      </Content>
    </Wrapper>
  );
}

const Content = styled.div``;
const Wrapper = styled.div`
  font-size: 16px;
`;
