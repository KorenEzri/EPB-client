/**
*
* Asynchronously loads the component for MultiInput
*
*/

import { lazyLoad } from 'utils/loadable';

export const MultiInput = lazyLoad(() => import('./index'), module => module.MultiInput);