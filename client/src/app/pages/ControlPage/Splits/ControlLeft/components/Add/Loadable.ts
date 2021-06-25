/**
 *
 * Asynchronously loads the component for Update
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Add = lazyLoad(
  () => import('./index'),
  module => module.Add,
);
