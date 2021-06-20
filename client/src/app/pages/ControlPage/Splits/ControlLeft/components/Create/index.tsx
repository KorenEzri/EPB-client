import * as React from 'react';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
import { ActionForm } from './ActionForm/Loadable';
import { CustomTypeForm } from './CustomTypeForm/Loadable';
// import { messages } from './messages';

interface Props {}
interface ActiveTab {
  isActive: boolean;
}
enum Tabs {
  ACTION,
  CUSTOMTYPE,
}
export function Create(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();
  const [tab, setTab] = React.useState(Tabs.ACTION);

  return (
    <Wrapper>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <HeaderContainer>
        <HeaderButton
          isActive={tab === Tabs.ACTION}
          onClick={() => {
            setTab(Tabs.ACTION);
          }}
        >
          an action
        </HeaderButton>
        <HeaderButton
          isActive={tab === Tabs.CUSTOMTYPE}
          onClick={() => {
            setTab(Tabs.CUSTOMTYPE);
          }}
        >
          a custom type
        </HeaderButton>
      </HeaderContainer>
      {tab === Tabs.ACTION ? (
        <ActionForm />
      ) : tab === Tabs.CUSTOMTYPE ? (
        <CustomTypeForm />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const HeaderContainer = styled.nav`
  display: flex;
  margin-top: -3.4px;
`;
const HeaderButton = styled.button<ActiveTab>`
  letter-spacing: 1px;
  box-shadow: 0px 1px 0px 0px #276873;
  background: ${({ isActive }) =>
    isActive
      ? ' linear-gradient(to bottom, #44778a 5%, #295d66 100%);'
      : '  linear-gradient(to bottom, #599bb3 5%, #408c99 100%);'};
  background-color: ${({ isActive }) => (isActive ? '599bb3;' : ' 599bb3;')};
  border: 1px solid #024979;
  display: inline-block;
  cursor: pointer;
  color: whitesmoke;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  height: 30px;
  width: 100%;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  outline: none !important;
  @media (max-width: 640px) {
    font-size: 10px;
    height: 40px;
    min-width: 60px;
  }
  &:hover {
    background: linear-gradient(to bottom, #035b7a 5%, #217ea0 100%);
    background-color: '#02698f;';
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
