import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function FromExisting(props: Props) {

  return (
  <Div>
    <Title>Add CRUD from an existing schema</Title>
  </Div>
  );

};

const Div = styled.div``;
const Title = styled.div`
margin: 12px;
letter-spacing: 1.5px;
`;