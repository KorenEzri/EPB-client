/**
 *
 * Asynchronously loads the component for RightSplit
 *
 */

import { lazyLoad } from 'utils/loadable';

export const RightSplit = lazyLoad(
  () => import('./index'),
  module => module.RightSplit,
);
