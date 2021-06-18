/**
*
* Asynchronously loads the component for Delete
*
*/

import { lazyLoad } from 'utils/loadable';

export const Delete = lazyLoad(() => import('./index'), module => module.Delete);