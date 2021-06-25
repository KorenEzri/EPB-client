/**
*
* Asynchronously loads the component for MultiSelect
*
*/

import { lazyLoad } from 'utils/loadable';

export const MultiSelect = lazyLoad(() => import('./index'), module => module.MultiSelect);