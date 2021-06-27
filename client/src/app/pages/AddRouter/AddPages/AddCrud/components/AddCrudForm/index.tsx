import * as React from 'react';
import { AddCrudOptions } from '../AddCrudOptions/Loadable';
import { FromExisting } from './FromExisting/Loadable';

interface Props {}
enum Opts {
  NONE,
  EXISTING,
  CREATE,
  NODB,
}
const options = {
  existing: {
    title: 'Add CRUD from an existing schema',
    component: FromExisting,
  },
  create: {
    title: 'Create a schema for CRUD operations',
  },
  noDB: {
    title: 'Add CRUD without a database',
  },
};
export function AddCrudForm(props: Props) {
  const [opt, setOpts] = React.useState<Opts>(Opts.NONE);

  return (
    <div>
      {!opt ? (
        <AddCrudOptions setOpts={setOpts} Opts={Opts} />
      ) : opt === Opts.EXISTING ? (
        <FromExisting />
      ) : opt === Opts.CREATE ? (
        options.create
      ) : opt === Opts.NODB ? (
        options.noDB
      ) : undefined}
    </div>
  );
}
