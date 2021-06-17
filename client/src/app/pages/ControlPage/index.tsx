import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { ControlLeft, ControlRight } from './Splits';

// import { messages } from './messages';

interface Props {}

export function ControlPage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Container>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
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
  width: 50%;
  height: 100vh;
  border-right: 1px solid black;
`;
const RightWrapper = styled.div`
  width: 50%;
  height: 100vh;
  border-left: 1px solid black;
`;
