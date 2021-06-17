/**
*
* Asynchronously loads the component for ControlPage
*
*/

import { lazyLoad } from 'utils/loadable';

export const ControlPage = lazyLoad(() => import('./index'), module => module.ControlPage);