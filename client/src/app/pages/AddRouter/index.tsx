import * as React from 'react';
import styled from 'styled-components/macro';
import { NotFoundPage } from '../../components';
import * as AddPages from './AddPages';

export function AddRouter(props) {
  const { id } = props.match.params;
  return id === 'userauth' ? <AddPages.AddUserAuth /> : id === 'crud' ? <AddPages.AddCrud /> : <NotFoundPage />;
}

const Div = styled.div``;
