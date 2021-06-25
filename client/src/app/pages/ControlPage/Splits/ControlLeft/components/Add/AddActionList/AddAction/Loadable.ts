/**
 *
 * Asynchronously loads the component for AddAction
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddAction = lazyLoad(
  () => import('./index'),
  module => module.AddAction,
);
