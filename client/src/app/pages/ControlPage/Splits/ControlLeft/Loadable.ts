/**
*
* Asynchronously loads the component for ControlLeft
*
*/

import { lazyLoad } from 'utils/loadable';

export const ControlLeft = lazyLoad(() => import('./index'), module => module.ControlLeft);