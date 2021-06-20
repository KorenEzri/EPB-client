import * as React from 'react';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
import { useApolloClient } from '@apollo/client';
import { LiveCode } from './StyledCode';
import { Playground } from './Playground/Loadable';
import { getterSetterQuery, queries } from '../../../../network';
import Prism from 'prismjs';
// import { messages } from './messages';

interface Props {}
enum Tabs {
  LIVECODE,
  PLAYGROUND,
}
enum SubTabs {
  RESOLVERS,
  TYPEDEFS,
}

export function ControlRight(props: Props) {
  const client = useApolloClient();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();
  const [tab, setTab] = React.useState<Tabs>(Tabs.LIVECODE);
  const [subTab, setSubTab] = React.useState<SubTabs>(SubTabs.RESOLVERS);
  const [resolvers, setResolvers] = React.useState('');
  const [typeDefs, setTypeDefs] = React.useState('');

  React.useEffect(() => {
    (async () => {
      try {
        await getterSetterQuery(client, queries.qGetResolvers, setResolvers);
        Prism.highlightAll();
      } catch ({ message }) {
        console.log(message);
      }
      try {
        await getterSetterQuery(client, queries.qTypeDefs, setTypeDefs);
      } catch ({ message }) {
        console.log(message);
      }
    })();
  });

  return (
    <Wrapper
      onClick={() => {
        const perma = document.querySelector('.permalight');
        if (perma instanceof HTMLElement) perma.classList.remove('permalight');
      }}
    >
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <TabContainer>
        <Tab
          onClick={() => {
            setTab(Tabs.LIVECODE);
          }}
        >
          <span>Live code</span>
          <Slider className={tab === Tabs.LIVECODE ? 'active' : ''} />
          {tab === Tabs.LIVECODE && (
            <SubTabContainer>
              <SubTab
                onClick={() => {
                  setSubTab(SubTabs.RESOLVERS);
                }}
              >
                Resolvers
              </SubTab>
              <Slider
                className={subTab === SubTabs.RESOLVERS ? 'activeD' : ''}
              />
              <SubTab
                onClick={() => {
                  setSubTab(SubTabs.TYPEDEFS);
                }}
              >
                TypeDefs
              </SubTab>
              <Slider
                className={subTab === SubTabs.TYPEDEFS ? 'activeC' : ''}
              />
            </SubTabContainer>
          )}
        </Tab>
        <Tab
          onClick={() => {
            setTab(Tabs.PLAYGROUND);
          }}
        >
          <span>GQL-Playground</span>
          <Slider className={tab === Tabs.PLAYGROUND ? 'activeB' : ''} />
        </Tab>
      </TabContainer>
      {tab === Tabs.LIVECODE ? (
        <LiveCode>
          <Pre id="breathing" className="language-javascript">
            <Code>
              <code className="language-javascript">
                {subTab === SubTabs.RESOLVERS ? resolvers : typeDefs}
              </code>
            </Code>
          </Pre>
        </LiveCode>
      ) : (
        <Playground />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  .highlight {
    background-color: #d6d600;
    padding: 2px !important;
    color: darkblue !important;
  }
  .permalight {
    background-color: #d6d600;
    padding: 2px !important;
    color: darkblue !important;
  }
  .active {
    display: inline-block;
    width: 50px;
    height: 4px;
    border-radius: 3px;
    background-color: #39bcd3;
    position: absolute;
    margin-left: -55px;
    margin-top: 18.5px;
    transition: all 0.4s linear;
  }
  .activeB {
    display: inline-block;
    width: 100px;
    height: 4px;
    border-radius: 3px;
    background-color: #39bcd3;
    position: absolute;
    margin-left: -102px;
    margin-top: 18.5px;
    transition: all 0.4s linear;
  }
  .activeC {
    display: inline-block;
    width: 40px;
    height: 4px;
    border-radius: 3px;
    background-color: #39bcd3;
    position: absolute;
    margin-left: 72px;
    margin-top: 27.5px;
    transition: all 0.4s linear;
  }
  .activeD {
    display: inline-block;
    width: 40px;
    height: 4px;
    border-radius: 3px;
    background-color: #39bcd3;
    position: absolute;
    margin-left: -70px;
    margin-top: 27.5px;
    transition: all 0.4s linear;
  }
`;
const Slider = styled.div``;
const TabContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  height: 70px;
`;
const SubTabContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Tab = styled.span`
  text-align: center;
  cursor: pointer;
  padding: 6px;
  width: 50%;
`;
const SubTab = styled.p`
  margin: 6px;
`;
const Code = styled.div`
  height: 100vh;
  position: relative;
`;
const Pre = styled.pre`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;
