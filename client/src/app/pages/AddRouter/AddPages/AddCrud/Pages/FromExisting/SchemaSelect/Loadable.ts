/**
 *
 * Asynchronously loads the component for SchemaSelect
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SchemaSelect = lazyLoad(
  () => import('./index'),
  module => module.SchemaSelect,
);
