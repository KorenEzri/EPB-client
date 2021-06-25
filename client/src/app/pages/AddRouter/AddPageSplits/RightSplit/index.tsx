import * as React from 'react';
import styled from 'styled-components/macro';
import { useApolloClient } from '@apollo/client';
import { LiveCode } from './StyledCode';
import { getterSetterQuery, queries } from '../../../../network';
import Prism from 'prismjs';

interface Props {
  rightContent;
}
enum SubTabs {
  RESOLVERS,
  TYPEDEFS,
}
export function RightSplit(props: Props) {
  const client = useApolloClient();
  const [subTab, setSubTab] = React.useState<SubTabs>(SubTabs.RESOLVERS);
  const [resolvers, setResolvers] = React.useState('');
  const [typeDefs, setTypeDefs] = React.useState('');

  const updateCodeTree = async () => {
    // GET ALL RELEVANT RESOLVERS
    // Prism.highlightAll();
    // GET ALL RELEVANT TYPEDEFS
  };

  React.useEffect(() => {
    (async () => {
      try {
        await updateCodeTree(); // GET ALL CODE FROM PREBUILT ACTION
      } catch ({ message }) {
        setResolvers(message);
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
      <TabContainer>
        <Tab>
          <span>GraphQL</span>
          <Slider />
          <SubTabContainer>
            <SubTab
              onClick={() => {
                setSubTab(SubTabs.RESOLVERS);
              }}
            >
              Resolvers
            </SubTab>
            <Slider className={subTab === SubTabs.RESOLVERS ? 'activeD' : ''} />
            <SubTab
              onClick={() => {
                setSubTab(SubTabs.TYPEDEFS);
              }}
            >
              TypeDefs
            </SubTab>
            <Slider className={subTab === SubTabs.TYPEDEFS ? 'activeC' : ''} />
          </SubTabContainer>
        </Tab>
        <Tab>
          <span>Utils</span>
        </Tab>
      </TabContainer>
      <LiveCode>
        <Pre id="breathing" className="language-javascript">
          <Code>
            <code className="language-javascript">
              {subTab === SubTabs.RESOLVERS ? resolvers : typeDefs}
            </code>
          </Code>
        </Pre>
      </LiveCode>
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
