/**
*
* Asynchronously loads the component for SchemaInputs
*
*/

import { lazyLoad } from 'utils/loadable';

export const SchemaInputs = lazyLoad(() => import('./index'), module => module.SchemaInputs);