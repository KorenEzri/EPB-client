/**
*
* Asynchronously loads the component for UserAuthForm
*
*/

import { lazyLoad } from 'utils/loadable';

export const UserAuthForm = lazyLoad(() => import('./index'), module => module.UserAuthForm);