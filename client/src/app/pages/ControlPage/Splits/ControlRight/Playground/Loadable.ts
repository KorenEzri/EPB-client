/**
*
* Asynchronously loads the component for Playground
*
*/

import { lazyLoad } from 'utils/loadable';

export const Playground = lazyLoad(() => import('./index'), module => module.Playground);