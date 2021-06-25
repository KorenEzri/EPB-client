/**
*
* Asynchronously loads the component for AddPageSplits
*
*/

import { lazyLoad } from 'utils/loadable';

export const AddPageSplits = lazyLoad(() => import('./index'), module => module.AddPageSplits);