import * as React from 'react';
import styled from 'styled-components/macro';
import { CheckBox } from 'app/components';

interface Props {
  option;
}

export function CrudCheckBox(props: Props) {
  const {
    option: { label, name, options },
  } = props;
  return <div></div>;
}
