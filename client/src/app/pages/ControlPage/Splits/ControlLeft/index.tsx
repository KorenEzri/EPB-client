import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { ActionList } from './ActionList/Loadable';
import { useApolloClient } from '@apollo/client';
import { getterSetter, queries } from '../../../../network';
// import { messages } from './messages';
interface Props {}

export function ControlLeft(props: Props) {
  const client = useApolloClient();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [actions, setActions] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        await getterSetter(client, queries.qActions, setActions);
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
        <HeaderButton>Create</HeaderButton>
        <HeaderButton>Update</HeaderButton>
        <HeaderButton>Delete</HeaderButton>
      </HeaderContainer>
      <ItemContainer>
        <YourActionsTitle>Your actions</YourActionsTitle>
        <ActionList actions={actions} />
      </ItemContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 16px;
`;
const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  height: 70px;
  margin-bottom: 5px;
`;
const YourActionsTitle = styled.span`
  position: relative;
  bottom: 5px;
  font-weight: bolder;
  letter-spacing: 1px;
  text-decoration: italic;
  margin-left: 5px;
`;
const ItemContainer = styled.div``;
const HeaderButton = styled.button`
  letter-spacing: 1px;
  margin-top: 15px;
  box-shadow: 0px 1px 0px 0px #f0f7fa;
  background: linear-gradient(to bottom, #2ea4cf 5%, #027eac 100%);
  background-color: #2b9dc7;
  border-radius: 6px;
  border: 1px solid #056cb1;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  width: 90px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #434758;
  outline: none !important;
  &:hover {
    background: linear-gradient(to bottom, #0384b3 5%, #2693bb 100%);
    background-color: #0175a0;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
