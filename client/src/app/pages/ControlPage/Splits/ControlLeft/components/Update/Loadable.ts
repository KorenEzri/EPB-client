/**
*
* Asynchronously loads the component for Update
*
*/

import { lazyLoad } from 'utils/loadable';

export const Update = lazyLoad(() => import('./index'), module => module.Update);