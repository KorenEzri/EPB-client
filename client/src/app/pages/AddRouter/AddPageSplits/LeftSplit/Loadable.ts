/**
 *
 * Asynchronously loads the component for LeftSplit
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LeftSplit = lazyLoad(
  () => import('./index'),
  module => module.LeftSplit,
);
