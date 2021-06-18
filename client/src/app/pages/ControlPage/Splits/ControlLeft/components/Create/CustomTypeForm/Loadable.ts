/**
*
* Asynchronously loads the component for CustomTypeForm
*
*/

import { lazyLoad } from 'utils/loadable';

export const CustomTypeForm = lazyLoad(() => import('./index'), module => module.CustomTypeForm);