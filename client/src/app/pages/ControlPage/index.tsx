import * as React from 'react';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
import { ControlLeft, ControlRight } from './Splits';

// import { messages } from './messages';

interface Props {}

export function ControlPage(props: Props) {
  const [refresh, setRefresh] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  return (
    <Container>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <LeftWrapper>
        <ControlLeft setRefresh={setRefresh} refresh={refresh} />
      </LeftWrapper>
      <RightWrapper>
        <ControlRight refresh={refresh} />
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
