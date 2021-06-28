import * as React from 'react';
import styled from 'styled-components/macro';
import { Crud } from './Crud/Loadable';
interface Props {
  actions;
}
export function Cruds(props: Props) {
  return (
    <Div>
      <Crud actions={props.actions} />
    </Div>
  );
}

const Div = styled.div``;
