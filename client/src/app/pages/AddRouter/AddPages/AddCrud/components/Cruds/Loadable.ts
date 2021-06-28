/**
 *
 * Asynchronously loads the component for Cruds
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Cruds = lazyLoad(
  () => import('./index'),
  module => module.Cruds,
);
