/**
*
* Asynchronously loads the component for InputSuggestion
*
*/

import { lazyLoad } from 'utils/loadable';

export const InputSuggestion = lazyLoad(() => import('./index'), module => module.InputSuggestion);