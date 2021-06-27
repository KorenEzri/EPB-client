/**
*
* Asynchronously loads the component for AddCrudOptions
*
*/

import { lazyLoad } from 'utils/loadable';

export const AddCrudOptions = lazyLoad(() => import('./index'), module => module.AddCrudOptions);