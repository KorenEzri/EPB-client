/**
*
* Asynchronously loads the component for CustomTypeInputs
*
*/

import { lazyLoad } from 'utils/loadable';

export const CustomTypeInputs = lazyLoad(() => import('./index'), module => module.CustomTypeInputs);