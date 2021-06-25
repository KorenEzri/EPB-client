/**
*
* Asynchronously loads the component for AddUserAuth
*
*/

import { lazyLoad } from 'utils/loadable';

export const AddUserAuth = lazyLoad(() => import('./index'), module => module.AddUserAuth);