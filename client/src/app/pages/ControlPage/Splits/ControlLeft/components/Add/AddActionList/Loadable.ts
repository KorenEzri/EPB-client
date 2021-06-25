/**
 *
 * Asynchronously loads the component for AddActionList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddActionList = lazyLoad(
  () => import('./index'),
  module => module.AddActionList,
);
