/**
*
* Asynchronously loads the component for AddCrud
*
*/

import { lazyLoad } from 'utils/loadable';

export const AddCrud = lazyLoad(() => import('./index'), module => module.AddCrud);