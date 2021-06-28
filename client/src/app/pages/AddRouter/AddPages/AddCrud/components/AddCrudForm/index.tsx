import * as React from 'react';
import { AddCrudOptions } from '../AddCrudOptions/Loadable';

interface Props {}

export function AddCrudForm(props: Props) {
  return (
    <div>
      <AddCrudOptions />
    </div>
  );
}
