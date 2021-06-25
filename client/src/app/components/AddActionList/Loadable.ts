/**
*
* Asynchronously loads the component for ActionList
*
*/

import { lazyLoad } from 'utils/loadable';

export const ActionList = lazyLoad(() => import('./index'), module => module.ActionList);