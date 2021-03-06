import * as React from 'react';
import styled from 'styled-components/macro';
import { AddPageSplits } from '../../AddPageSplits/Loadable';
import { UserAuthForm } from './UserAuthForm/Loadable';

interface Props {}

export function AddUserAuth(props: Props) {
  return (
    <Div>
      <AddPageSplits leftTitle="Add User Auth" LeftContent={UserAuthForm} rightContent={'Right'} />
    </Div>
  );
}

const Div = styled.div``;
