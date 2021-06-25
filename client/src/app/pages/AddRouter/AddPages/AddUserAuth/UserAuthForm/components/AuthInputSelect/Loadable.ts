/**
*
* Asynchronously loads the component for AuthInputSelect
*
*/

import { lazyLoad } from 'utils/loadable';

export const AuthInputSelect = lazyLoad(() => import('./index'), module => module.AuthInputSelect);