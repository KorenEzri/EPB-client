import * as React from 'react';
import styled from 'styled-components/macro';
import { AddAction } from './AddAction/Loadable';
interface Props {
  actions: { name: string; description: string; dependencies: string[]; link: string; }[];
}
export function AddActionList(props: Props) {
  return (
    <Div>
      {props.actions?.map((action, index) => {
        return <AddAction action={action} key={`${index}action`} />;
      })}
    </Div>
  );
}

const Div = styled.div``;
