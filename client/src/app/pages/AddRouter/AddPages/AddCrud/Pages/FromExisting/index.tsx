import * as React from 'react';
import styled from 'styled-components/macro';
import { Cruds } from '../../components/Cruds';
import { actions } from '../../actions';
interface Props {
  expanded: boolean;
}

export function FromExisting(props: Props) {
  if (props.expanded) return null;
  return (
    <Div>
      <Cruds actions={actions} />
    </Div>
  );
}

const Div = styled.div``;
