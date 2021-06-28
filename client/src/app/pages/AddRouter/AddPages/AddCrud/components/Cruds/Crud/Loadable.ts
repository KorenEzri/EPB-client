/**
 *
 * Asynchronously loads the component for Crud
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Crud = lazyLoad(
  () => import('./index'),
  module => module.Crud,
);
