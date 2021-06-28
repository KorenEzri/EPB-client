/**
*
* Asynchronously loads the component for FromExisting
*
*/

import { lazyLoad } from 'utils/loadable';

export const FromExisting = lazyLoad(() => import('./index'), module => module.FromExisting);