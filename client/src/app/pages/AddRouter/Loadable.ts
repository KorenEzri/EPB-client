/**
*
* Asynchronously loads the component for AddRouter
*
*/

import { lazyLoad } from 'utils/loadable';

export const AddRouter = lazyLoad(() => import('./index'), module => module.AddRouter);