/**
*
* Asynchronously loads the component for SchemaForm
*
*/

import { lazyLoad } from 'utils/loadable';

export const SchemaForm = lazyLoad(() => import('./index'), module => module.SchemaForm);