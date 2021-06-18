import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {}

export function Playground(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const src = 'http://localhost:8001/graphql';
  return (
    <Div>
      {t('')}

      {/*  {t(...messages.someThing())}  */}
      <Iframe src={src} />
    </Div>
  );
}

const Div = styled.div``;
const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
`;
