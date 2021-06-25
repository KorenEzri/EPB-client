import * as React from 'react';
import { Action } from './Action/Loadable';
interface Props {
  actions;
}
export function ActionList(props: Props) {
  return (
    <div>
      {props.actions?.map((action, index) => {
        return <Action action={action} key={`${index}action`} />;
      })}
    </div>
  );
}
