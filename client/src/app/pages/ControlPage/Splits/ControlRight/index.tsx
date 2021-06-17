import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { useApolloClient } from '@apollo/client';
import { qGetResolvers } from '../../../../network';
import Prism from 'prismjs';
// import { messages } from './messages';

interface Props {}

enum Tabs {
  LIVECODE,
  PLAYGROUND,
}

export function ControlRight(props: Props) {
  const client = useApolloClient();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [tab, setTab] = React.useState<Tabs>(Tabs.LIVECODE);
  const [resolvers, setResolvers] = React.useState('');

  React.useEffect(() => {
    (async () => {
      try {
        const {
          data: { getResolvers },
        } = await client.query({
          query: qGetResolvers,
        });
        setResolvers(getResolvers);
        Prism.highlightAll();
      } catch ({ message }) {
        console.log(message);
      }
    })();
  });

  return (
    <Wrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <TabContainer>
        <Tab
          onClick={() => {
            setTab(Tabs.LIVECODE);
          }}
        >
          Live code
        </Tab>
        <Tab
          onClick={() => {
            setTab(Tabs.PLAYGROUND);
          }}
        >
          GQL-Playground
        </Tab>
      </TabContainer>
      {tab === Tabs.LIVECODE ? (
        <LiveCode>
          <pre id="breathing" className="language-javascript">
            <Code>
              <code className="language-javascript">{resolvers}</code>
            </Code>
          </pre>
        </LiveCode>
      ) : (
        <Playground> TAB ONE</Playground>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;
const TabContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;
const Tab = styled.span`
  text-align: center;
  cursor: pointer;
  padding: 6px;
  width: 50%;
`;
const LiveCode = styled.div`
  margin-top: -8px;
  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #263e52;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #5c98cd;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #f05e5d;
  }

  .token.boolean,
  .token.number {
    color: #bc94f9;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #fcfcd6;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #66d8ef;
  }

  .token.keyword {
    color: #6eb26e;
  }

  .token.regex,
  .token.important {
    color: #f05e5d;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
  #breathing {
    -webkit-animation: breathing 8s ease-out infinite normal;
    animation: breathing 8s ease-out infinite normal;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes breathing {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.01);
    }
    60% {
      transform: scale(1.01);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const Code = styled.div`
  height: 100vh;
  position: relative;
`;
const Playground = styled.div``;
