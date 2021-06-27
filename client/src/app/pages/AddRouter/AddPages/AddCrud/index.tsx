import * as React from 'react';
import styled from 'styled-components/macro';
import { AddPageSplits } from '../../AddPageSplits/Loadable';
import {AddCrudForm} from "./components/AddCrudForm/Loadable"

interface Props {}

export function AddCrud(props: Props) {
  return (
    <Div>
      <AddPageSplits leftTitle="Add CRUD operations" LeftContent={AddCrudForm}  rightContent={'Right'} />
    </Div>
  );
}

const Div = styled.div``;
