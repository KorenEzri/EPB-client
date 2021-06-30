import { getterSetterQuery, queries } from 'app/network';
import * as React from 'react';
import styled from 'styled-components/macro';
import { ActionForm } from './ActionForm/Loadable';
import { CustomTypeForm } from './CustomTypeForm/Loadable';
import { SchemaForm } from './SchemaForm/Loadable';
import { useApolloClient } from '@apollo/client';

interface Props {}
interface ActiveTab {
  isActive: boolean;
}
enum Tabs {
  ACTION,
  CUSTOMTYPE,
  SCHEMA,
}
export function Create(props: Props) {
  const client = useApolloClient();
  const [tab, setTab] = React.useState(Tabs.ACTION);
  const [allowedTypes, setAllowedTypes] = React.useState<string[]>([])
  const fetchAllowedTypes = async () => {
    try {
      await getterSetterQuery(client, queries.qAllowedTypes, setAllowedTypes);
      allowedTypes.forEach((type:string)=> {
        type = type.trim()
      })
    } catch ({ message }) {
      console.log(message);
    }
  }
  React.useEffect(() => {
    (async () => {
     await fetchAllowedTypes()
    })();
  });
  return (
    <Wrapper>
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
        <HeaderButton
          isActive={tab === Tabs.SCHEMA}
          onClick={() => {
            setTab(Tabs.SCHEMA);
          }}
        >
          a DB schema
        </HeaderButton>
      </HeaderContainer>
      {tab === Tabs.ACTION ? (
          <ActionForm allowedTypes={Array.from(new Set(allowedTypes))} fetchAllowedTypes={fetchAllowedTypes}/>
      ) : tab === Tabs.CUSTOMTYPE ? (
        <CustomTypeForm allowedTypes={Array.from(new Set(allowedTypes))} fetchAllowedTypes={fetchAllowedTypes} />
      ) : tab === Tabs.SCHEMA ? (
        <SchemaForm allowedTypes={Array.from(new Set(allowedTypes))} fetchAllowedTypes={fetchAllowedTypes} />
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
  box-shadow: inset 0px 1px 0px 0px #7a8eb9;
  background: linear-gradient(to bottom, #637aad 5%, #5972a7 100%);
  background-color: #637aad;
  border: 1px solid #314179;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
  &:hover {
    background: linear-gradient(to bottom, #5972a7 5%, #637aad 100%);
    background-color: #5972a7;
  }
  &:active {
    position: relative;
    top: 1px;
  }
  border-bottom: ${({ isActive }) =>
    isActive ? '1.2px solid limegreen;' : '0px;'};
  height: 50px;
  width: 100%;
  border-radius: 4px;
`;
