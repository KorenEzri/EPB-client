/**
 *
 * Asynchronously loads the component for CheckBox
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CheckBox = lazyLoad(
  () => import('./index'),
  module => module.CheckBox,
);
