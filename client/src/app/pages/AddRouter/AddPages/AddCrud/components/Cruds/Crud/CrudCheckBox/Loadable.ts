/**
 *
 * Asynchronously loads the component for CrudCheckBox
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CrudCheckBox = lazyLoad(
  () => import('./index'),
  module => module.CrudCheckBox,
);
