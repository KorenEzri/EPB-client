/**
*
* Asynchronously loads the component for UserInputSelect
*
*/

import { lazyLoad } from 'utils/loadable';

export const UserInputSelect = lazyLoad(() => import('./index'), module => module.UserInputSelect);