import * as React from 'react';
import styled from 'styled-components/macro';
import { Action } from './Action/Loadable';
interface Props {
  actions;
}
export function ActionList(props: Props) {
  return (
    <Div>
      {props.actions?.map((action, index) => {
        return <Action action={action} key={`${index}action`} />;
      })}
    </Div>
  );
}

const Div = styled.div``;
