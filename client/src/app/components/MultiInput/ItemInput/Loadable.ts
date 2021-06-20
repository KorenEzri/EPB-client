/**
*
* Asynchronously loads the component for ItemInput
*
*/

import { lazyLoad } from 'utils/loadable';

export const ItemInput = lazyLoad(() => import('./index'), module => module.ItemInput);