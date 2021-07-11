import * as React from 'react';
import styled from 'styled-components/macro';
import * as components from './components';
import { useApolloClient } from '@apollo/client';
import { getterSetterQuery, queries } from '../../../../network';
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
          className="grey_out"
          disabled={true}
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
  .grey_out {
    filter: grayscale(50%);
    color: #999898;
  }
    button:disabled,
    button[disabled] {
      background-color: #cccccc;
      color: #999898;
    }
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
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  border-radius: 4px;
  height: 70px;
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
  box-shadow: inset 0px 0px 15px 3px #23395e;
  background: linear-gradient(to bottom, #2e466e 5%, #415989 100%);
  background-color: #2e466e;
  border-radius: 4px;
  border: 1px solid #1f2f47;
  border-bottom: ${({ isActive }) =>
    isActive ? '1.2px solid limegreen;' : '0px;'};
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 6px 13px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;
  &:hover {
    background: linear-gradient(to bottom, #415989 5%, #2e466e 100%);
    background-color: #415989;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
