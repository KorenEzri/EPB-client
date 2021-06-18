/**
 *
 * ActionList
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Action } from './Action/Loadable';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {
  actions;
}

export function ActionList(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      {props.actions?.map((action, index) => {
        return <Action action={action} key={`${index}action`} />;
      })}
    </Div>
  );
}

const Div = styled.div``;
