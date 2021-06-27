/**
*
* Asynchronously loads the component for AddCrudForm
*
*/

import { lazyLoad } from 'utils/loadable';

export const AddCrudForm = lazyLoad(() => import('./index'), module => module.AddCrudForm);