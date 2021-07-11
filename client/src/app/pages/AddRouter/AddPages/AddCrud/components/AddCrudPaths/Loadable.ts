/**
 *
 * Asynchronously loads the component for AddCrudPaths
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddCrudPaths = lazyLoad(
  () => import('./index'),
  module => module.AddCrudPaths,
);
