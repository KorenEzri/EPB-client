/**
*
* Asynchronously loads the component for ControlRight
*
*/

import { lazyLoad } from 'utils/loadable';

export const ControlRight = lazyLoad(() => import('./index'), module => module.ControlRight);