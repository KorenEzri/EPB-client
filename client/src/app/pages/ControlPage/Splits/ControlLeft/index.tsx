import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import * as components from './components';
import { useApolloClient } from '@apollo/client';
import { getterSetterQuery, queries } from '../../../../network';
// import { messages } from './messages';
interface Props {}
interface ActiveTab {
  isActive: boolean;
}
enum Tabs {
  ACTIONS,
  CREATE,
  ADD,
  DELETE,
}
export function ControlLeft(props: Props) {
  const client = useApolloClient();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [actions, setActions] = React.useState([]);
  const [tab, setTab] = React.useState(Tabs.ACTIONS);

  React.useEffect(() => {
    (async () => {
      try {
        await getterSetterQuery(client, queries.qActions, setActions);
      } catch ({ message }) {
        console.log(message);
      }
    })();
  });
  return (
    <Wrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <HeaderContainer>
        <HeaderButton
          isActive={tab === Tabs.ACTIONS}
          onClick={() => {
            setTab(Tabs.ACTIONS);
          }}
        >
          Actions
        </HeaderButton>
        <HeaderButton
          isActive={tab === Tabs.CREATE}
          onClick={() => {
            setTab(Tabs.CREATE);
          }}
        >
          Create
        </HeaderButton>
        <HeaderButton
          isActive={tab === Tabs.ADD}
          onClick={() => {
            setTab(Tabs.ADD);
          }}
        >
          Add
        </HeaderButton>
        <HeaderButton
          isActive={tab === Tabs.DELETE}
          onClick={() => {
            setTab(Tabs.DELETE);
          }}
        >
          Delete
        </HeaderButton>
      </HeaderContainer>
      <Content>
        {tab === Tabs.ACTIONS ? (
          <components.ActionList actions={actions} />
        ) : tab === Tabs.CREATE ? (
          <components.Create />
        ) : tab === Tabs.ADD ? (
          <components.Add />
        ) : tab === Tabs.DELETE ? (
          <components.Delete />
        ) : null}
      </Content>
    </Wrapper>
  );
}

const Content = styled.div``;
const Wrapper = styled.div`
  font-size: 16px;
`;
const HeaderContainer = styled.nav`
  display: flex;
  margin-bottom: 5px;
`;
const HeaderButton = styled.button<ActiveTab>`
  letter-spacing: 1px;
  box-shadow: 0px 1px 0px 0px #f0f7fa;
  background: ${({ isActive }) =>
    isActive
      ? ' linear-gradient(to bottom, #298baf 5%, #026c92 100%);'
      : '  linear-gradient(to bottom, #2ea4cf 5%, #027eac 100%);'};
  background-color: ${({ isActive }) => (isActive ? '#16495c' : ' #1f6680')};
  border: 1px solid #024979;
  border-bottom: ${({ isActive }) =>
    isActive ? '1.2px solid limegreen;' : '0px;'};
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 100%;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2c2e3a;
  outline: none !important;
  @media (max-width: 640px) {
    font-size: 10px;
    height: 40px;
    min-width: 60px;
  }
  &:hover {
    background: ${({ isActive }) =>
      isActive
        ? ' linear-gradient(to bottom, #035b7a 5%, #217ea0 100%);'
        : '  linear-gradient(to bottom, #026488 5%, #2693bb 100%);'};
    background-color: ${({ isActive }) => (isActive ? '#02698f;' : '#0175a0;')};
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
