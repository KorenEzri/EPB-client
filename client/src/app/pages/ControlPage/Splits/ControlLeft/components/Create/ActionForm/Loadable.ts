import { lazyLoad } from 'utils/loadable';

export const ActionForm = lazyLoad(
  () => import('./index'),
  module => module.ActionForm,
);
