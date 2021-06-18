/**
*
* Asynchronously loads the component for Action
*
*/

import { lazyLoad } from 'utils/loadable';

export const Action = lazyLoad(() => import('./index'), module => module.Action);