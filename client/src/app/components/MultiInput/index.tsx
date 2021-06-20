import * as React from 'react';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
import { ItemInput } from './ItemInput/Loadable';
// import { messages } from './messages';

interface Props {
  type;
  items;
  setItems;
}

export function MultiInput(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  return (
    <Div>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <label>{props.type}</label>
      <div>
        <ItemInput items={props.items} setItems={props.setItems} />
      </div>
    </Div>
  );
}

const Div = styled.div``;
