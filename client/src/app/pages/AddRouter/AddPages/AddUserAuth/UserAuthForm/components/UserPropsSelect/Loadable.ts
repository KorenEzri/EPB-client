/**
 *
 * Asynchronously loads the component for UserPropsSelect
 *
 */

import { lazyLoad } from 'utils/loadable';

export const UserPropsSelect = lazyLoad(
  () => import('./index'),
  module => module.UserPropsSelect,
);
